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
  const response = await axios.get(`${API}/contacts`);
  return response.data;
};

/**
 * Function fetches a single contact from the address book by a
 * given id as Contact with all properties.
 *
 * @param id string
 * @returns Promise<Contact>
 */
export const fetchOne = async (id: string): Promise<Contact> => {
  const response = await axios.get(`${API}/contacts/${id}`);
  return response.data;
};

export const createContact = async (contact: Contact): Promise<Contact> => {
  const response = await axios.post(`${API}/contacts`, contact);
  return response.data;
};

export const updateContact = async (contact: Contact): Promise<Contact> => {
  const response = await axios.put(`${API}/contacts/${contact.id}`, contact);
  return response.data;
};

export const removeContact = async (id: string): Promise<any> => {
  const response = await axios.delete(`${API}/contacts/${id}`);
  return response.data;
};
