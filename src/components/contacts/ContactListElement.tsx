import { useMemo } from "react";
import { ContactPreview } from "../../types/Contact";
import { Link } from "@reach/router";

type ContactListElementProps = {
  contact: ContactPreview;
};

export const ContactListElement = ({ contact }: ContactListElementProps) => {
  const fullName = useMemo(() => {
    return `${contact.firstname} ${contact.lastname}`;
  }, [contact]);

  return (
    <Link to={`/contact/${contact.id}`}>
      <li className="contact-list-element">
        {contact.favorite && <div className="contact-fav"></div>}
        <h2 data-testid="full-name">{fullName}</h2>
      </li>
    </Link>
  );
};
