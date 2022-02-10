import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  getTheme,
  setTheme,
} from "../features/themeSwitcher/themeSwitcherSlice";
import "../assets/css/ThemeSwitcher.css";

export const ThemeSwitcher = () => {
  const theme = useAppSelector(getTheme);
  const dispatch = useAppDispatch();

  const icon = useMemo(() => {
    return theme === "light" ? "🌒" : "☀️";
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function switchTheme() {
    if (theme === "light") {
      dispatch(setTheme("dark"));
    } else if (theme === "dark") {
      dispatch(setTheme("light"));
    }
  }

  return (
    <div className="theme-switcher">
      <button
        onClick={switchTheme}
        className="button xs"
        data-testid="theme-switcher-button"
      >
        switch to {icon}
      </button>
    </div>
  );
};
