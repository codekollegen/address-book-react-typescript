import { render } from "@testing-library/react";
import { ContactDetail } from "../../../components/contacts/ContactDetail";

describe("ContactDetail component", () => {
  it("should render correctly", () => {
    const { getByText } = render(<ContactDetail />);

    expect(getByText(/Contact Detail/i)).toBeInTheDocument();
  });
});
