import { render } from "@testing-library/react";
import { ContactListElement } from "../../../components/contacts/ContactListElement";
import { Contact } from "../../../types/Contact";

describe("render contact list", () => {
  it("should render correctly", async () => {
    const contact: Contact = {
      id: "1",
      firstname: "Test",
      lastname: "Test",
      company: "Test",
      phones: [],
      emails: [],
      addresses: [],
      favorite: false,
    };

    const { findByTestId } = render(<ContactListElement contact={contact} />);
    const fullName = await findByTestId("full-name");

    expect(fullName.innerHTML).toEqual("Test Test");
  });
});
