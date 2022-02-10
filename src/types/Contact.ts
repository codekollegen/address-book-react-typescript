export enum ElementLabel {
  PRIVATE = "private",
  WORK = "work",
  MOBILE = "mobile",
  HOME = "home",
}

export type PhoneNumber = {
  label: ElementLabel;
  phone: string;
};

export type EmailAddress = {
  label: ElementLabel;
  email: string;
};

export type Address = {
  label: ElementLabel;
  address: string;
};

export type Contact = {
  id: string;
  firstname: string;
  lastname: string;
  company: string;
  phones: PhoneNumber[];
  emails: EmailAddress[];
  addresses: Address[];
  favorite: boolean;
};
