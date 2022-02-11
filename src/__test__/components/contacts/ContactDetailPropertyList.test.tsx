import { render } from "@testing-library/react";
import { ContactDetailPropertyList } from "../../../components/contacts/ContactDetailPropertyList";
import { ElementLabel, Property } from "../../../types/Contact";

describe("ContactDetailPropertyList component", () => {
  it("should render correctly", async () => {
    const propertyList: Property[] = [
      { label: ElementLabel.HOME, value: "" },
      { label: ElementLabel.WORK, value: "" },
      { label: ElementLabel.PRIVATE, value: "" },
      { label: ElementLabel.MOBILE, value: "" },
    ];

    const { getAllByTestId } = render(
      <ContactDetailPropertyList propertyList={propertyList} />
    );

    const elements = await getAllByTestId("property-list-element");

    expect(elements).toHaveLength(4);
  });
});
