import React, { useState, useEffect } from "react";

import { useTheme } from "next-themes";

import SunIcon from "@/icons/Sun";
import MoonIcon from "@/icons/Moon";

const DarkModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () =>
    setTheme(resolvedTheme === "light" ? "dark" : "light");

  return (
    <div>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="p-2 font-semibold transition-all bg-gray-200 rounded-md dark:bg-gray-600 hover:ring-2 ring-gray-300"
        onClick={toggleTheme}
      >
        {resolvedTheme === "light" ? (
          <MoonIcon className="w-5 h-5" />
        ) : (
          <SunIcon className="w-5 h-5" />
        )}
      </button>
    </div>
  );
};

export default DarkModeToggle;
