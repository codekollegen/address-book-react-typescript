import { render } from "@testing-library/react";
import { store } from "../../../app/store";
import { Provider } from "react-redux";
import { ContactDetail } from "../../../components/contacts/ContactDetail";
import { Router } from "@reach/router";

describe("ContactDetail component", () => {
  it("should render correctly", async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <ContactDetail path="/" />
        </Router>
      </Provider>
    );

    const el = await getByTestId("contact-detail");
    expect(el).toBeInTheDocument();
  });
});
