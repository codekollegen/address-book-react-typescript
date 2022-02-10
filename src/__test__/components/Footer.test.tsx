import { render } from "@testing-library/react";
import { Footer } from "../../components/Footer";

describe("Footer component", () => {
  it("should render correclty", () => {
    const { getByText } = render(<Footer />);
    expect(getByText(/codekollegen.de/i)).toBeInTheDocument();
  });
});
