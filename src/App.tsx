import { ContactList } from "./components/contacts/ContactList";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { Router, Redirect } from "@reach/router";
import { ContactDetail } from "./components/contacts/ContactDetail";
import { ContactForm } from "./components/contacts/ContactForm";
import { NotFound } from "./components/NotFound";
import { Menu } from "./components/Menu";
import { Row } from "./components/Row";
import { Logo } from "./components/Logo";

/* Assets */
import "./assets/css/App.css";

function App() {
  return (
    <div className="App" data-testid="app">
      {/* Top Bar */}
      <Row>
        <Menu />
        <ThemeSwitcher />
      </Row>

      {/* Logo */}
      <Logo />

      {/* Content Area */}
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
