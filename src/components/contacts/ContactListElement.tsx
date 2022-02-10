import { useMemo } from "react";
import { Contact } from "../../types/Contact";

type ContactListElementProps = {
  contact: Contact;
};

export const ContactListElement = ({ contact }: ContactListElementProps) => {
  const fullName = useMemo(() => {
    return `${contact.firstname} ${contact.lastname}`;
  }, [contact]);

  return (
    <li className="contact-list-element">
      {contact.favorite && <div className="contact-fav"></div>}
      <h2 data-testid="full-name">{fullName}</h2>
    </li>
  );
};
