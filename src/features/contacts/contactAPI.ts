import { Contact, ContactPreview } from "../../types/Contact";
import axios from "axios";
import { API } from "../../Constants";

/**
 * Function fetches a list of all contacts in the address book as
 * ContactPreviews with only id, firstname, lastname and favorite properties
 *
 * @returns Promise<ContactPreview[]>
 */
export const fetchAll = async (): Promise<ContactPreview[]> => {
  const contacts = await axios.get(`${API}/contacts`);
  return contacts.data;
};

/**
 * Function fetches a single contact from the address book by a
 * given id as Contact with all properties.
 *
 * @param id string
 * @returns Promise<Contact>
 */
export const fetchOne = async (id: string): Promise<Contact> => {
  const contact = await axios.get(`${API}/contacts/${id}`);
  return contact.data;
};
