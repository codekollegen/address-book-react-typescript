import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Contact } from "../../types/Contact";
import { fetchSingleContactFromAPI } from "./contactAPI";
import {
  addContact,
  updateContact,
  removeContact,
  addOrUpdateContact,
  getContact,
} from "./contactSlice";

export const useEmptyContact = () => {
  return {
    id: "",
    firstname: "",
    lastname: "",
    company: "",
    phones: [],
    emails: [],
    addresses: [],
    favorite: false,
  };
};

export const useContact = (id: string | undefined) => {
  const [loading, setLoading] = useState(false);
  const [contact, setContact] = useState<Contact>(useEmptyContact());

  const contactFromStore = useAppSelector(getContact)(id ?? "");
  const dispatch = useAppDispatch();

  useEffect(
    () => {
      const fetchUser = async () => {
        /* loading state */
        setLoading(true);

        /* Fetch the contact from api */
        const contactResponse = await fetchSingleContactFromAPI(id as string);

        /* add fetched contact to the store */
        dispatch(addOrUpdateContact(contactResponse));

        /* Set local state contact */
        setContact(contactResponse);

        /* loading state */
        setLoading(false);
      };

      /*
       * Fetch contact from api if
       * (A) An id was provided
       * (B) There is no contact in the store
       */
      if (id !== undefined && contactFromStore === undefined) {
        fetchUser();
      } else if (contactFromStore !== undefined) {
        setContact(contactFromStore);
      }
    },

    /* Only call the useEffect once on load */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    if (contactFromStore !== undefined) {
      setContact(contactFromStore);
    }
  }, [contactFromStore]);

  /* Memoized value fullname that combines firstname and lastname */
  const fullName = useMemo(() => {
    return `${contact?.firstname} ${contact?.lastname}`;
  }, [contact]);

  /* Add a new contact */
  const pushContact = async (data: any) => {
    dispatch(addContact({ ...contact, ...data }));
  };

  /* Update an existing contact */
  const putContact = (data: any) => {
    dispatch(updateContact({ ...contact, ...data }));
  };

  /* Delete a contact */
  const deleteContact = async () => {
    if (window.confirm("Do you really want to delete this contact?")) {
      if (contact) {
        await dispatch(removeContact(contact));
      }
    }
  };

  return {
    contact,
    loading,
    fullName,
    setContact,
    pushContact,
    putContact,
    deleteContact,
  };
};
