import { useEffect, useState } from "react";

const STORAGE_KEY = "morphix:theme";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (v) return v === "dark";
    } catch {}
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem(STORAGE_KEY, "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem(STORAGE_KEY, "light");
    }
  }, [isDark]);

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setIsDark((s) => !s)}
      className="px-2 py-1 rounded-md bg-white/5 hover:bg-white/6 border border-white/6 text-sm text-slate-200"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}
