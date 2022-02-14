import { render } from "@testing-library/react";
import { ContactForm } from "../../../components/contacts/ContactForm";
import { Provider } from "react-redux";
import { store } from "../../../app/store";

describe("ContactForm component", () => {
  it("should render correctly", async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ContactForm />
      </Provider>
    );

    const element = await getByTestId("contact-form");
    expect(element).toBeInTheDocument();
  });
});
