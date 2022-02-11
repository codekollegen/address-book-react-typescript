import { useMemo } from "react";
import { ContactList } from "./components/contacts/ContactList";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { useAppSelector } from "./app/hooks";
import { getTheme } from "./features/themeSwitcher/themeSwitcherSlice";
import { Router } from "@reach/router";

/* Assets */
import logo from "./assets/img/logo.png";
import logoWhite from "./assets/img/logo-white.png";
import "./assets/css/App.css";
import { ContactDetail } from "./components/contacts/ContactDetail";
import { ContactForm } from "./components/contacts/ContactForm";

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
      </Router>
    </div>
  );
}

export default App;
