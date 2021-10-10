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
        className="p-2 font-semibold rounded-md bg-grey-300 dark:bg-grey-800"
        onClick={toggleTheme}
      >
        {resolvedTheme === "light" ? <MoonIcon /> : <SunIcon />}
      </button>
    </div>
  );
};

export default DarkModeToggle;
