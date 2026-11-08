import { useEffect, useState } from "react";

const repository = "https://github.com/jianb14/hulmio-design-system";
const repositoryApi = "https://api.github.com/repos/jianb14/hulmio-design-system";
const cacheKey = "hulmio-github-stars";
const cacheLifetime = 5 * 60 * 1000;
let pendingRequest: Promise<number> | undefined;

function readCachedStars(): number | null {
  try {
    const cached = JSON.parse(localStorage.getItem(cacheKey) || "null");
    const age = Date.now() - cached?.fetchedAt;
    if (Number.isSafeInteger(cached?.count) && cached.count >= 0 && typeof cached.fetchedAt === "number" && age >= 0 && age < cacheLifetime) {
      return cached.count;
    }
  } catch {
    // A blocked or invalid cache must not prevent the repository link from working.
  }
  return null;
}

function fetchStars(): Promise<number> {
  if (!pendingRequest) {
    pendingRequest = fetch(repositoryApi, {
      headers: { Accept: "application/vnd.github+json" },
      credentials: "omit",
      cache: "no-cache",
      signal: AbortSignal.timeout(8000),
    }).then(async response => {
      if (!response.ok) throw new Error("GitHub star count unavailable");
      const data = await response.json();
      if (!Number.isSafeInteger(data.stargazers_count) || data.stargazers_count < 0) {
        throw new Error("Invalid GitHub star count");
      }
      const count: number = data.stargazers_count;
      try {
        localStorage.setItem(cacheKey, JSON.stringify({ count, fetchedAt: Date.now() }));
      } catch {
        // The live count still works when browser storage is unavailable.
      }
      return count;
    }).finally(() => {
      pendingRequest = undefined;
    });
  }
  return pendingRequest;
}

export function GitHubLink() {
  const [stars, setStars] = useState<number | null>(null);
  useEffect(() => {
    const cached = readCachedStars();
    if (cached !== null) {
      setStars(cached);
      return;
    }
    let active = true;
    fetchStars().then(
      count => { if (active) setStars(count); },
      () => { if (active) setStars(null); },
    );
    return () => { active = false; };
  }, []);
  const count = stars?.toLocaleString("en-US");
  const compactCount = stars?.toLocaleString("en-US", { notation: "compact", maximumFractionDigits: 1 }).toLowerCase();
  const label = `Hulmio on GitHub, ${count === undefined ? "star count unavailable" : `${count} stars`}`;
  return (
    <a className="site-github" href={repository} target="_blank" rel="noreferrer" aria-label={label} title={label}>
      <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
      </svg>
      {compactCount !== undefined && <span className="site-github-count" aria-hidden="true">{compactCount}</span>}
    </a>
  );
}
