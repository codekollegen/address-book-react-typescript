import { Link } from "@reach/router";

/* Assets */
import "../../assets/css/ContactListOptions.css";

export const ContactListOptions = () => {
  return (
    <div className="contact-list-options">
      <Link to="/create" className="button">
        + create new contact
      </Link>
    </div>
  );
};
