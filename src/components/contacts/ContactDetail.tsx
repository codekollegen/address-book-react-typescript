import { RouteComponentProps } from "@reach/router";
import { useEffect, useMemo, useState } from "react";
import { fetchSingleContactFromAPI } from "../../features/contacts/contactAPI";
import { Contact } from "../../types/Contact";
import { Loading } from "../Loading";

// Assets
import "../../assets/css/ContactDetail.css";
import { ContactDetailPropertyList } from "./ContactDetailPropertyList";

interface ContactDetailProps extends RouteComponentProps {
  id?: string;
}

export const ContactDetail = ({ id }: ContactDetailProps) => {
  const [contact, setContact] = useState<Contact>();

  const fullName = useMemo(() => {
    return `${contact?.firstname} ${contact?.lastname}`;
  }, [contact]);

  useEffect(() => {
    const fetchUser = async () => {
      const contactResponse = await fetchSingleContactFromAPI(id as string);
      setContact(contactResponse);
    };

    fetchUser();
  }, [id]);

  return (
    <div className="contact-detail">
      {!contact ? (
        <>
          <h1>Contact Detail</h1>
          <Loading />
        </>
      ) : (
        <>
          <h1>{fullName}</h1>
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
