import { RouteComponentProps } from "@reach/router";

interface ContactFormProps extends RouteComponentProps {
  id?: string;
}

export const ContactForm = (props: ContactFormProps) => {
  return (
    <div className="contact-form" data-testid="contact-form">
      Contact Form
    </div>
  );
};
