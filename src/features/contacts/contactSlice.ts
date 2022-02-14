import { Contact, ContactPreview } from "../../types/Contact";
import { RootState } from "../../app/store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchContactsFromAPI } from "./contactAPI";

export type ContactState = {
  previews: ContactPreview[];
  contacts: Contact[];
  loading: boolean;
};

const initialState: ContactState = {
  previews: [],
  contacts: [],
  loading: false,
};

export const fetchContacts = createAsyncThunk(
  "contacts/fetch",
  async (): Promise<ContactPreview[]> => {
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

export const updateContact = createAsyncThunk(
  "contacts/update",
  async (contact: Contact): Promise<Contact> => {
    // TODO
    // 1. PUT api call (e.g. "/api/contacts/<contact.id>")
    return contact;
  }
);

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addOrUpdateContact(state, action: PayloadAction<Contact>) {
      let existing = state.contacts.find((c) => c.id === action.payload.id);
      if (existing) {
        existing = action.payload;
      } else {
        state.contacts.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder

      /* (1)(A) FETCH CONTACT PREVIEWS -> PENDING */
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })

      /* (1)(B) FETCH CONTACT PREVIEWS -> FULFILLED */
      .addCase(fetchContacts.fulfilled, (state, action) => {
        // Only add previews, since fetching all contacts is heavy
        state.previews = action.payload;
        state.loading = false;
      })

      /* (2)(A) ADD NEW CONTACT -> FULFILLED */
      .addCase(addContact.fulfilled, (state, action) => {
        // Add to contacts
        state.contacts.push(action.payload);

        // Add to previews
        const { id, firstname, lastname, favorite } = action.payload;
        state.previews.push({
          id: id,
          firstname: firstname,
          lastname: lastname,
          favorite: favorite,
        });
      })

      /* (3)(A) UPDATE EXISTING CONTACT -> FULFILLED */
      .addCase(updateContact.fulfilled, (state, action) => {
        // Remove from previews
        state.previews = state.previews.filter(
          (contact) => contact.id !== action.payload.id
        );

        // Re-Add to previews
        const { id, firstname, lastname, favorite } = action.payload;
        state.previews.push({
          id: id,
          firstname: firstname,
          lastname: lastname,
          favorite: favorite,
        });

        // Remove from contacts
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload.id
        );

        // Re-Add to contacts
        state.contacts.push(action.payload);
      })

      /* (4)(A) DELETE EXISTING CONTACT -> FULFILLED */
      .addCase(removeContact.fulfilled, (state, action) => {
        // Remove from previews
        state.previews = state.previews.filter(
          (contact) => contact.id !== action.payload.id
        );

        // Remove from contacts
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload.id
        );
      });
  },
});

export const { addOrUpdateContact } = contactSlice.actions;

export const getAllContactPreviews = (state: RootState) =>
  state.contacts.previews;

export const getContact = (state: RootState) => (id: string) =>
  state.contacts.contacts.find((el) => el.id === id);

export const loadingState = (state: RootState) => state.contacts.loading;

export default contactSlice.reducer;
