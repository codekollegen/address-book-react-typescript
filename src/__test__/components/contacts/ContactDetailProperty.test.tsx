import { render } from "@testing-library/react";
import { ContactDetailProperty } from "../../../components/contacts/ContactDetailProperty";
import { ElementLabel, Property } from "../../../types/Contact";

describe("ContactDetailProperty component", () => {
  it("should render correctly", async () => {
    const property: Property = {
      label: ElementLabel.HOME,
      value: "",
    };

    const { getByTestId } = render(
      <ContactDetailProperty property={property} />
    );

    const element = await getByTestId("property-list-element");
    expect(element).toBeInTheDocument();
  });
});
