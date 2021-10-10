import React, { useState, useEffect } from "react";

import { useTheme } from "next-themes";

const DarkModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      className="px-4 py-2 font-semibold text-white bg-black rounded-md dark:text-black dark:bg-white"
      onClick={() => {
        setTheme(resolvedTheme === "light" ? "dark" : "light");
      }}
    >
      Change Theme
    </button>
  );
};

export default DarkModeToggle;
