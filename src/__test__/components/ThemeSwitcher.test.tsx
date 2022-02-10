import { Provider } from "react-redux";
import { store } from "../../app/store";
import { render } from "@testing-library/react";
import { ThemeSwitcher } from "../../components/ThemeSwitcher";

describe("ThemeSwitcher component", () => {
  it("should render correctly", async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ThemeSwitcher />
      </Provider>
    );

    const button = await getByTestId("theme-switcher-button");
    expect(button).toBeInTheDocument();
  });
});
