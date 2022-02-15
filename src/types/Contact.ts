export enum ElementLabel {
  PRIVATE = "PRIVATE",
  WORK = "WORK",
  MOBILE = "MOBILE",
  HOME = "HOME",
}

export type Property = {
  label: ElementLabel;
  value: string;
};

export type Contact = {
  // [key: string]: any;
  id: string;
  firstname: string;
  lastname: string;
  company?: string;
  phones: Property[];
  emails: Property[];
  addresses: Property[];
  favorite: boolean;
};

export type ContactPreview = Pick<
  Contact,
  "id" | "firstname" | "lastname" | "favorite"
>;
