import { Link } from "@reach/router";

/* Assets */
import "../assets/css/Menu.css";

export const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/">Contact List</Link>
        </li>

        <li>
          <Link to="/create">Create</Link>
        </li>
      </ul>
    </nav>
  );
};
