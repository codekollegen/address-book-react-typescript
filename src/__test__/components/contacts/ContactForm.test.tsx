import { render } from "@testing-library/react";
import { ContactForm } from "../../../components/contacts/ContactForm";

describe("ContactForm component", () => {
  it("should render correctly", async () => {
    const { getByTestId } = render(<ContactForm />);

    const element = await getByTestId("contact-form");
    expect(element).toBeInTheDocument();
  });
});
