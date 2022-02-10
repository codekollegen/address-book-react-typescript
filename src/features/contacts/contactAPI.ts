import { Contact, ElementLabel } from "../../types/Contact";

export function fetchContactsFromAPI() {
  // TODO
  // replace by real api call
  return new Promise<Contact[]>((resolve) =>
    setTimeout(
      () =>
        resolve([
          {
            id: "1",
            firstname: "Theodor",
            lastname: "Testmann",
            company: "",
            phones: [],
            emails: [],
            addresses: [],
            favorite: false,
          },
          {
            id: "2",
            firstname: "Hildegard",
            lastname: "Hülsenfrucht",
            company: "Hildegard GmbH",
            phones: [
              {
                label: ElementLabel.HOME,
                phone: "+49 12345 123456789",
              },
            ],
            emails: [
              {
                label: ElementLabel.PRIVATE,
                email: "hildegard@test.com",
              },
            ],
            addresses: [],
            favorite: true,
          },
        ]),
      500
    )
  );
}
