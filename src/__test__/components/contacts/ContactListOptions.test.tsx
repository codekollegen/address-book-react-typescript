import { render } from "@testing-library/react";
import { ContactListOptions } from "../../../components/contacts/ContactListOptions";

describe("ContactListOptions component", () => {
  it("should render correctly", () => {
    const { getByText } = render(<ContactListOptions />);

    expect(getByText(/\+ Create New/i)).toBeInTheDocument();
  });
});
