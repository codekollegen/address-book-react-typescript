import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  fetchContacts,
  getAllContacts,
  loadingState,
} from "../../features/contacts/contactSlice";
import { Loading } from "../Loading";
import { ContactListElement } from "./ContactListElement";
import "../../assets/css/ContactList.css";
import { ContactListOptions } from "./ContactListOptions";

export const ContactList = () => {
  const allContacts = useAppSelector(getAllContacts);
  const loading = useAppSelector(loadingState);
  const dispatch = useAppDispatch();

  if (allContacts.length === 0) {
    dispatch(fetchContacts());
  }

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
