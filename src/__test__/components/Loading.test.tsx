import { render } from "@testing-library/react";
import { Loading } from "../../components/Loading";

describe("Loading component", () => {
  it("should render correctly", async () => {
    const { getByTestId } = render(<Loading />);

    const loading = await getByTestId("loading");
    expect(loading.innerHTML).toEqual("Loading ...");
  });
});
