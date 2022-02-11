import { render } from "@testing-library/react";
import { NotFound } from "../../components/NotFound";

describe("NotFound component", () => {
  it("should render correctly", () => {
    const { getByText } = render(<NotFound />);

    expect(getByText(/404/i)).toBeInTheDocument();
  });
});
