import { render } from "@testing-library/react";
import { ContactForm } from "../../../components/contacts/ContactForm";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import { Router } from "@reach/router";

describe("ContactForm component", () => {
  it("should render correctly", async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <ContactForm path="/" />
        </Router>
      </Provider>
    );

    const element = await getByTestId("contact-form");
    expect(element).toBeInTheDocument();
  });
});
