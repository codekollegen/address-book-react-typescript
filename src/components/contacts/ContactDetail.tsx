import { RouteComponentProps, Link } from "@reach/router";
import { Loading } from "../Loading";
import { ContactDetailPropertyList } from "./ContactDetailPropertyList";

// Assets
import "../../assets/css/ContactDetail.css";
import { useContact } from "../../features/contacts/contactHooks";

interface ContactDetailProps extends RouteComponentProps {
  id?: string;
}

export const ContactDetail = ({ id }: ContactDetailProps) => {
  const { contact, fullName, deleteContact } = useContact(id);

  return (
    <div className="contact-detail" data-testid="contact-detail">
      {!contact ? (
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
            <button className="button xs" onClick={deleteContact}>
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
              <ContactDetailPropertyList propertyList={contact.phones} />
            </div>

            <div className="contact-detail-grid-element">
              <label>Emails</label>
              <ContactDetailPropertyList propertyList={contact.emails} />
            </div>

            <div className="contact-detail-grid-element">
              <label>Addresses</label>
              <ContactDetailPropertyList propertyList={contact.addresses} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
