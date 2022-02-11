import { useMemo } from "react";
import { ContactList } from "./components/contacts/ContactList";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { useAppSelector } from "./app/hooks";
import { getTheme } from "./features/themeSwitcher/themeSwitcherSlice";
import { Router, Redirect } from "@reach/router";

/* Assets */
import logo from "./assets/img/logo.png";
import logoWhite from "./assets/img/logo-white.png";
import "./assets/css/App.css";
import { ContactDetail } from "./components/contacts/ContactDetail";
import { ContactForm } from "./components/contacts/ContactForm";
import { NotFound } from "./components/NotFound";

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

      <Router>
        {/* Contact list for listing all available contacts */}
        <ContactList path="/" />

        {/* Contact detail Page for single contact */}
        <ContactDetail path="/contact/:id" />

        {/* Create a new contact */}
        <ContactForm path="/create" />

        {/* Edit an existing contact */}
        <ContactForm path="/edit/:id" />

        {/* 404 */}
        <NotFound path="/404" />

        {/* Redirect the rest to 404 */}
        <Redirect noThrow from="*" to="/404" />
      </Router>
    </div>
  );
}

export default App;
