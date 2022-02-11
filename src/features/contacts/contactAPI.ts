import { Contact, ContactPreview } from "../../types/Contact";
import contacts from "../../mock/api/contacts.json";

/**
 * Function fetches a list of all contacts in the address book as
 * ContactPreviews with only id, firstname, lastname and favorite properties
 *
 * @returns Promise<ContactPreview[]>
 */
export function fetchContactsFromAPI(): Promise<ContactPreview[]> {
  return new Promise<ContactPreview[]>((resolve) =>
    setTimeout(() => {
      const contactsResult = (contacts as Contact[]).map((c: Contact) => {
        return {
          id: c.id,
          firstname: c.firstname,
          lastname: c.lastname,
          favorite: c.favorite,
        };
      });

      resolve(contactsResult);
    }, 500)
  );
}

/**
 * Function fetches a single contact from the address book by a
 * given id as Contact with all properties.
 *
 * @param id string
 * @returns Promise<Contact>
 */
export function fetchSingleContactFromAPI(id: string): Promise<Contact> {
  return new Promise<Contact>((resolve, reject) =>
    setTimeout(() => {
      const contact = (contacts as Contact[]).find(
        (el: Contact) => el.id === id
      );

      if (contact) {
        resolve(contact);
      } else {
        reject(new Error("No user was found"));
      }
    }, 500)
  );
}
