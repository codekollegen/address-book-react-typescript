import { Property } from "../../types/Contact";
import { ContactDetailProperty } from "./ContactDetailProperty";

type Props = {
  propertyList: any;
};

export const ContactDetailPropertyList = ({ propertyList }: Props) => {
  return (
    <>
      {propertyList.length === 0 && <div>No entry</div>}
      {propertyList.map((property: Property, key: any) => (
        <ContactDetailProperty property={property} key={key} />
      ))}
    </>
  );
};
