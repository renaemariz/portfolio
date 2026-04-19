"use client";
import Navbar from "@/components/Navbar";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useLayoutEffect,
} from "react";

const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // 1. Initialize state as null or a neutral value to avoid hydration mismatch
  const [isDark, setIsDark] = useState<boolean | null>(null);

  // 2. Use a LayoutEffect for the initial DOM sync
  // This fires before the browser paints, preventing the "flash"
  useLayoutEffect(() => {
    const stored = localStorage.getItem("theme");
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const shouldBeDark = stored === "dark" || (!stored && systemDark);

    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newVal = !prev;
      if (newVal) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newVal;
    });
    console.log("Current theme is now:", isDark);
  };

  // 3. Prevent rendering children until we know the theme
  // This avoids the "Cascading Render" warning by ensuring
  // the first paint is the correct one.
  if (isDark === null) {
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
