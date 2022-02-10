import { Contact } from "../../types/Contact";
import { RootState } from "../../app/store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchContactsFromAPI } from "./contactAPI";

export type ContactState = {
  data: Contact[];
  loading: boolean;
};

const initialState: ContactState = {
  data: [],
  loading: false,
};

export const fetchContacts = createAsyncThunk(
  "contacts/fetch",
  async (): Promise<Contact[]> => {
    // TODO
    // swr GET api call (e.g. "/api/contacts")
    const response = await fetchContactsFromAPI();
    return response;
  }
);

export const addContact = createAsyncThunk(
  "contacts/add",
  async (contact: Contact): Promise<Contact> => {
    // TODO
    // 1. POST api call (e.g. "/api/contacts")
    return contact;
  }
);

export const removeContact = createAsyncThunk(
  "contacts/remove",
  async (contact: Contact): Promise<Contact> => {
    // TODO
    // 1. DELETE api call (e.g. "/api/contacts/<contact.id>")
    return contact;
  }
);

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })

      .addCase(addContact.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })

      .addCase(removeContact.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (contact) => contact.id !== action.payload.id
        );
      });
  },
});

export const getAllContacts = (state: RootState) => state.contacts.data;

export const loadingState = (state: RootState) => state.contacts.loading;

export const getFavoriteContacts = (state: RootState) =>
  state.contacts.data.filter((contact) => contact.favorite);

export default contactSlice.reducer;
