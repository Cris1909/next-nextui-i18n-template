"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const setThemeDark = () => setTheme("dark");
  const setThemeLight = () => setTheme("light");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="mt-4">
      The current theme is: {theme}
      <br />
      <div className="grid gap-1">
        <button onClick={setThemeLight} className="flex gap-2 items-center">
          <i className="i-mdi-white-balance-sunny" />
          Light Mode
        </button>
        <button onClick={setThemeDark} className="flex gap-2 items-center">
          <i className="i-mdi-moon-and-stars" />
          Dark Mode
        </button>
        <button onClick={toggleTheme} className="flex gap-2 items-center">
          <i className="i-mdi-theme-light-dark" />
          Toggle Mode
        </button>
      </div>
    </div>
  );
}
