import { useState, useEffect } from "react";

function useSystemColorMode() {
  const [colorMode, setColorMode] = useState("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      setColorMode(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    setColorMode(mediaQuery.matches ? "dark" : "light");

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return colorMode;
}

export default useSystemColorMode;
