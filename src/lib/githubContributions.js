export const GITHUB_USERNAME = "Aryan-205";
export const GITHUB_YEAR = 2026;

const API_BASE = "https://github-contributions-api.jogruber.de/v4/";

const inflight = new Map();

export function getGitHubContributionsUrl(username, year) {
  return `${API_BASE}${username}?y=${String(year)}`;
}

/** Deduped fetch; uses high priority when supported by the browser. */
export function fetchGitHubContributions(username, year) {
  const key = `${username}-${year}`;
  if (!inflight.has(key)) {
    const request = fetch(getGitHubContributionsUrl(username, year), {
      priority: "high",
    }).then(async (response) => {
      const data = await response.json();
      if (!response.ok) {
        throw new Error(
          data?.error ??
            `Fetching GitHub contribution data for "${username}" failed.`,
        );
      }
      return data;
    });
    inflight.set(key, request);
  }
  return inflight.get(key);
}

export function prefetchGitHubContributions(
  username = GITHUB_USERNAME,
  year = GITHUB_YEAR,
) {
  return fetchGitHubContributions(username, year).catch(() => {});
}
