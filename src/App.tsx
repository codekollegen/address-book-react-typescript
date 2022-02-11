import { useMemo } from "react";
import { ContactList } from "./components/contacts/ContactList";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { useAppSelector } from "./app/hooks";
import { getTheme } from "./features/themeSwitcher/themeSwitcherSlice";

/* Assets */
import logo from "./assets/img/logo.png";
import logoWhite from "./assets/img/logo-white.png";
import "./assets/css/App.css";

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
