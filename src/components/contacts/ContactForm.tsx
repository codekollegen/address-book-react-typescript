import { RouteComponentProps } from "@reach/router";
import { useContact } from "../../features/contacts/contactHooks";
import { Loading } from "../Loading";

// Assets
import "../../assets/css/ContactForm.css";

interface ContactFormProps extends RouteComponentProps {
  id?: string;
}

export const ContactForm = ({ id }: ContactFormProps) => {
  const {
    contact,
    setContact,
    loading,
    fullName,
    deleteContact,
    pushContact,
    putContact,
  } = useContact(id);

  return (
    <div className="contact-form" data-testid="contact-form">
      <h1>{id ? `Edit ${fullName}` : "Create"}</h1>
      {JSON.stringify(contact)}

      {loading && <Loading />}

      <fieldset>
        <label htmlFor="contact-form-firstname">Firstname</label>
        <input
          id="contact-form-firstname"
          type="text"
          value={contact?.firstname}
          onChange={(e) =>
            setContact({ ...contact, firstname: e.target.value })
          }
        />

        <label htmlFor="contact-form-lastname">Lastname</label>
        <input
          id="contact-form-lastname"
          type="text"
          value={contact?.lastname}
          onChange={(e) => setContact({ ...contact, lastname: e.target.value })}
        />

        <label htmlFor="contact-form-company">Company</label>
        <input
          id="contact-form-company"
          type="text"
          value={contact?.company}
          onChange={(e) => setContact({ ...contact, company: e.target.value })}
        />

        <label htmlFor="contact-form-favorite">Favorite</label>
        <input
          id="contact-form-favorite"
          type="checkbox"
          checked={contact?.favorite}
          onChange={(e) =>
            setContact({ ...contact, favorite: e.target.checked })
          }
        />
      </fieldset>

      <button className="button xs" onClick={id ? putContact : pushContact}>
        {id ? "Update" : "Save"}
      </button>

      {id && (
        <button className="button xs" onClick={deleteContact}>
          Delete
        </button>
      )}
    </div>
  );
};
