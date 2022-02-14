import { RouteComponentProps } from "@reach/router";
import { useContact } from "../../features/contacts/contactHooks";
import { Loading } from "../Loading";
import { useForm } from "react-hook-form";

// Assets
import "../../assets/css/ContactForm.css";
import { useEffect } from "react";

interface ContactFormProps extends RouteComponentProps {
  id?: string;
}

export const ContactForm = ({ id }: ContactFormProps) => {
  const { contact, loading, fullName, deleteContact, pushContact, putContact } =
    useContact(id);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: contact,
  });

  useEffect(() => {
    reset(contact);
  }, [reset, contact]);

  return (
    <div className="contact-form" data-testid="contact-form">
      <h1>{id ? `Edit ${fullName}` : "Create"}</h1>
      {JSON.stringify(contact)}

      {loading && <Loading />}
      <form
        onSubmit={handleSubmit((data) => {
          if (id) {
            putContact(data);
          } else {
            pushContact(data);
          }
        })}
      >
        <fieldset>
          <div className="form-group">
            <label htmlFor="contact-form-firstname">Firstname</label>
            <input
              id="contact-form-firstname"
              type="text"
              {...register("firstname", {
                required: "Please provide a firstname",
              })}
            />
            <div className="form-validation">{errors.firstname?.message}</div>
          </div>

          <div className="form-group">
            <label htmlFor="contact-form-lastname">Lastname</label>
            <input
              id="contact-form-lastname"
              type="text"
              {...register("lastname", {
                required: "Please provide a lastname",
              })}
            />
            <div className="form-validation">{errors.lastname?.message}</div>
          </div>

          <div className="form-group">
            <label htmlFor="contact-form-company">Company</label>
            <input
              id="contact-form-company"
              type="text"
              {...register("company")}
            />
            <div className="form-validation"></div>
          </div>

          <div className="form-group">
            <label htmlFor="contact-form-favorite">Favorite</label>
            <input
              id="contact-form-favorite"
              type="checkbox"
              {...register("favorite")}
            />
          </div>
        </fieldset>

        <input
          type="submit"
          className="button xs"
          value={id ? "Update" : "Save"}
        />

        {id && (
          <button className="button xs" onClick={deleteContact}>
            Delete
          </button>
        )}
      </form>
    </div>
  );
};
