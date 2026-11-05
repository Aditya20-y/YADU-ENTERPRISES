"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("yadu_theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("yadu_theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-lg border border-amber-200/60 dark:border-amber-800/60 ${className}`} />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-lg border border-amber-200 dark:border-amber-800/80 bg-white/90 dark:bg-[#1a130a]/90 text-stone-700 dark:text-amber-300 hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-400 transition-colors shadow-sm ${className}`}
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4 transition-transform hover:-rotate-12 text-amber-700" />
      ) : (
        <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
      )}
    </button>
  );
}