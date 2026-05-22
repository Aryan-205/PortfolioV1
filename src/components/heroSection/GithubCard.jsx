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

function getBlockSize(containerWidth, weekCount) {
  if (containerWidth < 40 || weekCount < 1) return 10;
  return Math.max(
    4,
    Math.floor(
      (containerWidth - (weekCount - 1) * BLOCK_MARGIN) / weekCount,
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

function useContainerWidth(ref) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => setWidth(el.getBoundingClientRect().width);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return width;
}

export default function GitHubActivityCard() {
  const containerRef = useRef(null);
  const containerWidth = useContainerWidth(containerRef);
  const weekCount = getYearToDateWeekCount();
  const blockSize = getBlockSize(containerWidth, weekCount);

  const [calendarData, setCalendarData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalContributions, setTotalContributions] = useState(null);
  const [longestStreak, setLongestStreak] = useState(null);

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
  }, [applyContributions]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full max-w-sm cursor-pointer rounded-2xl border border-neutral-700 bg-neutral-800 p-4 text-white shadow-sm md:p-5"
      onClick={() => window.open(`https://github.com/${USERNAME}`, "_blank")}
    >
      <motion.div className="mb-3 flex items-center justify-between text-xs">
        <span className="font-medium tracking-wide">GitHub Activity</span>
        <span className="text-neutral-400">@{USERNAME}</span>
      </motion.div>

      <motion.div ref={containerRef} className="w-full github-calendar-wrap">
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
      </motion.div>

      <motion.div className="mt-4 flex gap-6 text-xs text-neutral-400">
        <p>
          <span className="block font-semibold text-white">This Year</span>
          {totalContributions != null ? (
            totalContributions.toLocaleString()
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
      </motion.div>
    </motion.div>
  );
}
