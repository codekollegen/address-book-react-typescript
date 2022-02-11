import { Property } from "../../types/Contact";

type Props = {
  property: Property;
};

export const ContactDetailProperty = ({ property }: Props) => {
  return (
    <div
      className="contact-detail-property"
      data-testid="property-list-element"
    >
      {property.label}: {property.value}
    </div>
  );
};
