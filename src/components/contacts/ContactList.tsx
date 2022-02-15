import { useAppSelector } from "../../app/hooks";
import {
  getAllContactPreviews,
  loadingState,
} from "../../features/contacts/contactSlice";
import { Loading } from "../Loading";
import { ContactListElement } from "./ContactListElement";
import { ContactListOptions } from "./ContactListOptions";
import { RouteComponentProps } from "@reach/router";

/* Assets */
import "../../assets/css/ContactList.css";

export const ContactList = (props: RouteComponentProps) => {
  const allContacts = useAppSelector(getAllContactPreviews);
  const loading = useAppSelector(loadingState);

  return (
    <div className="contact-list">
      <h1 data-testid="contact-list-title">Contact List</h1>

      <ContactListOptions />

      {loading ? (
        <Loading />
      ) : (
        <ul>
          {allContacts
            .slice()
            .sort((a, b) => (a.firstname > b.firstname ? 1 : -1))
            .map((contact, key) => (
              <ContactListElement contact={contact} key={key} />
            ))}
        </ul>
      )}
    </div>
  );
};
