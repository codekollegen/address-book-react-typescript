import { RouteComponentProps } from "@reach/router";
import { useContact } from "../../features/contacts/contactHooks";
import { Loading } from "../Loading";
import { useForm, useFieldArray } from "react-hook-form";
import { useEffect } from "react";
import { ElementLabel } from "../../types/Contact";

// Assets
import "../../assets/css/ContactForm.css";

interface ContactFormProps extends RouteComponentProps {
  id?: string;
}

export const ContactForm = ({ id }: ContactFormProps) => {
  const {
    contact,
    loading,
    fullName,
    removeContact,
    addContact,
    updateContact,
  } = useContact(id);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    defaultValues: contact,
  });

  const phoneFields = useFieldArray({
    control,
    name: "phones",
  });

  const emailFields = useFieldArray({
    control,
    name: "emails",
  });

  const addressFields = useFieldArray({
    control,
    name: "addresses",
  });

  useEffect(() => {
    reset(contact);
  }, [reset, contact]);

  return (
    <div className="contact-form" data-testid="contact-form">
      <h1>{id ? `Edit ${fullName}` : "Create"}</h1>

      {loading && <Loading />}
      <form
        onSubmit={handleSubmit((data) => {
          console.log("submit", data);
          if (id) {
            updateContact(data);
          } else {
            addContact(data);
          }
        })}
      >
        <fieldset>
          {/* FIRSTNAME */}
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

          {/* LASTNAME */}
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

          {/* COMPANY */}
          <div className="form-group">
            <label htmlFor="contact-form-company">Company</label>
            <input
              id="contact-form-company"
              type="text"
              {...register("company")}
            />
            <div className="form-validation"></div>
          </div>

          {/* PHONE */}
          <div className="form-group has-children">
            <label>Phone</label>
            {/* PHONE - ADD NEW NUMBER */}
            <button
              className="append-new-property button xs"
              onClick={() => {
                phoneFields.append({ label: undefined, value: "" });
              }}
            >
              + add phone number
            </button>

            {/* PHONE - MAPPED FIELDS FOR EACH NUMBER */}
            {phoneFields.fields.map((field, key) => (
              <div
                className="form-subgroup-wrapper"
                key={`phones_group_${field.id}`}
              >
                {/* PHONE - LABEL */}
                <div className="form-subgroup">
                  <select
                    {...register(`phones.${key}.label` as const, {
                      required: "Please provide a label",
                    })}
                  >
                    <option value="">Please select a value ...</option>
                    {Object.keys(ElementLabel).map((label, labelkey) => (
                      <option
                        value={label}
                        key={`phones.${key}.label.${labelkey}`}
                      >
                        {label}
                      </option>
                    ))}
                  </select>

                  <div className="form-validation">
                    {errors.phones ? errors.phones[key]?.label?.message : ""}
                  </div>
                </div>

                {/* PHONE - NUMBER */}
                <div className="form-subgroup">
                  <input
                    type="text"
                    key={`phones_value_${field.id}`}
                    {...register(`phones.${key}.value` as const, {
                      required: "Please provide a phone number",
                    })}
                  />
                  <div className="form-validation">
                    {errors.phones ? errors.phones[key]?.value?.message : ""}
                  </div>
                </div>

                {/* PHONE - OPTIONS */}
                <div className="form-subgroup">
                  <button
                    className="button xs delete"
                    onClick={() => {
                      phoneFields.remove(key);
                    }}
                  >
                    delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* EMAIL */}
          <div className="form-group has-children">
            <label>Email</label>
            {/* PHONE - ADD NEW NUMBER */}
            <button
              className="append-new-property button xs"
              onClick={() => {
                emailFields.append({ label: undefined, value: "" });
              }}
            >
              + add email
            </button>
            {emailFields.fields.map((field, key) => (
              <div
                className="form-subgroup-wrapper"
                key={`emails_group_${field.id}`}
              >
                {/* EMAIL - LABEL */}
                <div className="form-subgroup">
                  <select
                    {...register(`emails.${key}.label` as const, {
                      required: "Please provide a label",
                    })}
                  >
                    <option value="">Please select a value ...</option>
                    {Object.keys(ElementLabel).map((label, labelkey) => (
                      <option
                        value={label}
                        key={`emails.${key}.label.${labelkey}`}
                      >
                        {label}
                      </option>
                    ))}
                  </select>

                  <div className="form-validation">
                    {errors.emails ? errors.emails[key]?.label?.message : ""}
                  </div>
                </div>

                {/* EMAIL - EMAIL ADDRESS */}
                <div className="form-subgroup">
                  <input
                    type="text"
                    key={`emails_value_${field.id}`}
                    {...register(`emails.${key}.value` as const, {
                      required: "Please provide an email",
                    })}
                  />
                  <div className="form-validation">
                    {errors.emails ? errors.emails[key]?.value?.message : ""}
                  </div>
                </div>

                {/* EMAIL - OPTIONS */}
                <div className="form-subgroup">
                  <button
                    className="button xs delete"
                    onClick={() => {
                      emailFields.remove(key);
                    }}
                  >
                    delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ADDRESS */}
          <div className="form-group has-children">
            <label>Address</label>
            {/* ADDRESS - ADD NEW ADDRESS */}
            <button
              className="append-new-property button xs"
              onClick={() => {
                addressFields.append({ label: undefined, value: "" });
              }}
            >
              + add address
            </button>

            {addressFields.fields.map((field, key) => (
              <div
                className="form-subgroup-wrapper"
                key={`addresses_group_${field.id}`}
              >
                {/* ADDRESS - LABEL */}
                <div className="form-subgroup">
                  <select
                    {...register(`addresses.${key}.label` as const, {
                      required: "Please provide a label",
                    })}
                  >
                    <option value="">Please select a value ...</option>
                    {Object.keys(ElementLabel).map((label, labelkey) => (
                      <option
                        value={label}
                        key={`addresses.${key}.label.${labelkey}`}
                      >
                        {label}
                      </option>
                    ))}
                  </select>

                  <div className="form-validation">
                    {errors.addresses
                      ? errors.addresses[key]?.label?.message
                      : ""}
                  </div>
                </div>

                {/* ADDRESS - ADDRESS */}
                <div className="form-subgroup">
                  <input
                    type="text"
                    key={`addresses_value_${field.id}`}
                    {...register(`addresses.${key}.value` as const, {
                      required: "Please provide an address",
                    })}
                  />
                  <div className="form-validation">
                    {errors.addresses
                      ? errors.addresses[key]?.value?.message
                      : ""}
                  </div>
                </div>

                {/* ADDRESS - OPTIONS */}
                <div className="form-subgroup">
                  <button
                    className="button xs delete"
                    onClick={() => {
                      addressFields.remove(key);
                    }}
                  >
                    delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* FAVROITE */}
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
          <button
            className="button xs"
            onClick={(e) => {
              e.preventDefault();
              removeContact();
            }}
          >
            Delete
          </button>
        )}
      </form>
    </div>
  );
};
