import { RouteComponentProps, Link } from "@reach/router";
import { Loading } from "../Loading";
import { ContactDetailPropertyList } from "./ContactDetailPropertyList";
import { useContact } from "../../features/contacts/contactHooks";

// Assets
import "../../assets/css/ContactDetail.css";

interface ContactDetailProps extends RouteComponentProps {
  id?: string;
}

export const ContactDetail = ({ id }: ContactDetailProps) => {
  const { loading, contact, fullName, removeContact } = useContact(id);

  return (
    <div className="contact-detail" data-testid="contact-detail">
      {loading ? (
        <>
          <h1>Contact Detail</h1>
          <Loading />
        </>
      ) : (
        <>
          <h1>{fullName}</h1>
          <div className="contact-detail-options">
            <Link to={`/edit/${contact.id}`} className="button xs">
              Edit
            </Link>
            <button className="button xs" onClick={removeContact}>
              Delete
            </button>
          </div>
          <div className="contact-detail-grid">
            <div className="contact-detail-grid-element">
              <label>Lastname</label>
              <div>{contact.lastname || "No entry"}</div>
            </div>

            <div className="contact-detail-grid-element">
              <label>Firstname</label>
              <div>{contact.firstname || "No entry"}</div>
            </div>

            <div className="contact-detail-grid-element">
              <label>Company</label>
              <div>{contact.company || "No entry"}</div>
            </div>

            <div className="contact-detail-grid-element">
              <label>Phonenumbers</label>
              {contact.phones && (
                <ContactDetailPropertyList propertyList={contact.phones} />
              )}
            </div>

            <div className="contact-detail-grid-element">
              <label>Emails</label>
              {contact.emails && (
                <ContactDetailPropertyList propertyList={contact.emails} />
              )}
            </div>

            <div className="contact-detail-grid-element">
              <label>Addresses</label>
              {contact.addresses && (
                <ContactDetailPropertyList propertyList={contact.addresses} />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
