import React, { useState, useEffect } from "react";

import { useTheme } from "next-themes";

const DarkModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isLightMode = resolvedTheme === "light";

  const toggleTheme = () => setTheme(isLightMode ? "dark" : "light");

  return (
    <div
      className={`toggle-track ${isLightMode ? "toggled" : null}`}
      onClick={toggleTheme}
    >
      <div className="toggle-moon">🌛</div>
      <div className="toggle-sun">☀️</div>
      <div className="toggle-thumb"></div>
    </div>
  );
};

export default DarkModeToggle;
