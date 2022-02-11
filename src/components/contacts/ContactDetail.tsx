import { RouteComponentProps } from "@reach/router";

interface ContactDetailProps extends RouteComponentProps {
  id?: string;
}

export const ContactDetail = (props: ContactDetailProps) => {
  return <div className="contact-detail">Contact Detail {props.id}</div>;
};
