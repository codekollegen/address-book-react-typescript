import React, { useMemo } from "react";
import logo from "./logo.png";
import logoWhite from "./logo-white.png";
// import { Counter } from "./features/counter/Counter";
import { ContactList } from "./components/contacts/ContactList";
import "./assets/css/App.css";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { useAppSelector } from "./app/hooks";
import { getTheme } from "./features/themeSwitcher/themeSwitcherSlice";

function App() {
  const theme = useAppSelector(getTheme);
  const logoToShow = useMemo(() => {
    if (theme === "light") {
      return logo;
    }

    if (theme === "dark") {
      return logoWhite;
    }
  }, [theme]);

  return (
    <div className="App" data-testid="app">
      <ThemeSwitcher />
      <img src={logoToShow} alt="Logo" title="Logo" className="App-logo" />
      <ContactList />
    </div>
  );
}

export default App;
