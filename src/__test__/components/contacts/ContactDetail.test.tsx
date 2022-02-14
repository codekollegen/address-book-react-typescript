import { render } from "@testing-library/react";
import { store } from "../../../app/store";
import { Provider } from "react-redux";
import { ContactDetail } from "../../../components/contacts/ContactDetail";

describe("ContactDetail component", () => {
  it("should render correctly", async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ContactDetail />
      </Provider>
    );

    const el = await getByTestId("contact-detail");
    expect(el).toBeInTheDocument();
  });
});
