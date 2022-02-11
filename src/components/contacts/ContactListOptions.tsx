import { Link } from "@reach/router";

/* Assets */
import "../../assets/css/ContactListOptions.css";

export const ContactListOptions = () => {
  return (
    <div className="contact-list-options">
      <Link to="/create" className="button">
        + Create New
      </Link>
      {/*<button className="button">Only Favorites (todo)</button>*/}
      Todos: show only favorites / sort by firstname/lastname / display type:
      list, grid
    </div>
  );
};
