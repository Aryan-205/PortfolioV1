import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ActivityCalendar } from "react-activity-calendar";
import "react-github-calendar/tooltips.css";
import {
  fetchGitHubContributions,
  GITHUB_USERNAME,
  GITHUB_YEAR,
} from "@/lib/githubContributions";

const USERNAME = GITHUB_USERNAME;
const YEAR = GITHUB_YEAR;
const BLOCK_MARGIN = 3;
const WEEK_START = 0;

const calendarTheme = {
  dark: ["#525252", "#0e4429", "#196c2e", "#2ea043", "#3fb950"],
};

function formatDate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function getYearToDateRange() {
  const start = `${YEAR}-01-01`;
  const end = formatDate(new Date());
  return { start, end };
}

function startOfWeek(date, weekStart = WEEK_START) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = (day - weekStart + 7) % 7;
  d.setDate(d.getDate() - diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

function eachDay(from, to) {
  const days = [];
  const cur = new Date(from);
  cur.setHours(0, 0, 0, 0);
  const end = new Date(to);
  end.setHours(0, 0, 0, 0);
  while (cur <= end) {
    days.push(formatDate(cur));
    cur.setDate(cur.getDate() + 1);
  }
  return days;
}

function getYearToDateWeekCount() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const yearStart = new Date(YEAR, 0, 1);
  const firstCalendarDate = startOfWeek(yearStart);
  const dayCount =
    Math.floor((today - firstCalendarDate) / 86_400_000) + 1;
  return Math.ceil(dayCount / 7);
}

const CARD_MIN_WIDTH = 320;

function getBlockSize(containerWidth, weekCount) {
  const width = containerWidth < CARD_MIN_WIDTH ? CARD_MIN_WIDTH : containerWidth;
  if (width < 40 || weekCount < 1) return 10;
  return Math.max(
    4,
    Math.floor(
      (width - (weekCount - 1) * BLOCK_MARGIN) / weekCount,
    ),
  );
}

function buildYearToDateActivities(activities) {
  const { start, end } = getYearToDateRange();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const yearStart = new Date(YEAR, 0, 1);
  const firstCalendarDate = startOfWeek(yearStart);

  const activityMap = new Map(
    activities
      .filter((d) => d.date >= start && d.date <= end)
      .map((a) => [a.date, a]),
  );

  return eachDay(firstCalendarDate, today).map((date) => {
    const existing = activityMap.get(date);
    if (existing) return existing;
    return { date, count: 0, level: 0 };
  });
}

function calculateLongestStreak(activities) {
  const sorted = [...activities].sort(
    (a, b) => new Date(a.date) - new Date(b.date),
  );

  let longest = 0;
  let current = 0;

  for (const { count } of sorted) {
    if (count > 0) {
      current += 1;
      longest = Math.max(longest, current);
    } else {
      current = 0;
    }
  }

  return longest;
}

function useContainerWidth(ref, enabled) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    const el = ref.current;
    if (!el) return;

    const update = () => setWidth(el.getBoundingClientRect().width);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, enabled]);

  return width;
}

function CalendarSkeleton() {
  return (
    <div
      className="h-[98px] w-full animate-pulse rounded-md bg-neutral-700/80"
      aria-hidden
    />
  );
}

export default function GitHubActivityCard() {
  const [hasMounted, setHasMounted] = useState(false);
  const containerRef = useRef(null);
  const containerWidth = useContainerWidth(containerRef, hasMounted);
  const weekCount = getYearToDateWeekCount();
  const blockSize = getBlockSize(containerWidth, weekCount);
  const calendarReady = hasMounted && containerWidth >= 40;

  const [calendarData, setCalendarData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalContributions, setTotalContributions] = useState(null);
  const [longestStreak, setLongestStreak] = useState(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const applyContributions = useCallback((contributions) => {
    const { start, end } = getYearToDateRange();
    const yearData = contributions.filter(
      (d) => d.date >= start && d.date <= end,
    );

    setTotalContributions(yearData.reduce((sum, d) => sum + d.count, 0));
    setLongestStreak(calculateLongestStreak(yearData));
    setCalendarData(buildYearToDateActivities(contributions));
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    let cancelled = false;

    fetchGitHubContributions(USERNAME, YEAR)
      .then((data) => {
        if (!cancelled) {
          applyContributions(data.contributions);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setCalendarData([]);
          setTotalContributions(0);
          setLongestStreak(0);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [applyContributions, hasMounted]);

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      className="w-full min-w-80 max-w-sm cursor-pointer rounded-2xl border border-neutral-700 bg-neutral-800 p-4 text-white shadow-sm md:p-5"
      onClick={() => window.open(`https://github.com/${USERNAME}`, "_blank")}
    >
      <div className="mb-3 flex items-center justify-between text-xs">
        <span className="font-medium tracking-wide">GitHub Activity</span>
        <span className="text-neutral-400">@{USERNAME}</span>
      </div>

      <div ref={containerRef} className="github-calendar-wrap w-full min-h-[98px]">
        {calendarReady ? (
          <ActivityCalendar
            data={calendarData}
            loading={loading}
            colorScheme="dark"
            theme={calendarTheme}
            weekStart={WEEK_START}
            blockSize={blockSize}
            blockMargin={BLOCK_MARGIN}
            blockRadius={2}
            fontSize={12}
            showWeekdayLabels={false}
            showMonthLabels={false}
            showColorLegend={false}
            showTotalCount={false}
            maxLevel={4}
          />
        ) : (
          <CalendarSkeleton />
        )}
      </div>

      <div className="mt-4 flex gap-6 text-xs text-neutral-400">
        <p>
          <span className="block font-semibold text-white">This Year</span>
          {totalContributions != null ? (
            totalContributions.toLocaleString("en-US")
          ) : (
            <span className="inline-block h-4 w-10 animate-pulse rounded bg-neutral-700" />
          )}
        </p>
        <p>
          <span className="block font-semibold text-white">Longest Streak</span>
          {longestStreak != null ? (
            `${longestStreak} days`
          ) : (
            <span className="inline-block h-4 w-12 animate-pulse rounded bg-neutral-700" />
          )}
        </p>
      </div>
    </motion.div>
  );
}
