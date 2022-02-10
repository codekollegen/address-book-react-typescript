import { render } from "@testing-library/react";
import { ContactList } from "../../../components/contacts/ContactList";
import { store } from "../../../app/store";
import { Provider } from "react-redux";

describe("render contact list", () => {
  it("should render correctly", async () => {
    const { findByTestId } = render(
      <Provider store={store}>
        <ContactList />
      </Provider>
    );

    const title = await findByTestId("contact-list-title");
    expect(title.innerHTML).toEqual("Contact List");
  });
});
