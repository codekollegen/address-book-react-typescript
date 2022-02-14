import contactReducer, {
  ContactState,
} from "../../../features/contacts/contactSlice";

describe("contact reducer", () => {
  const initialState: ContactState = {
    previews: [],
    contacts: [],
    loading: false,
  };

  it("should handle initial state", () => {
    expect(contactReducer(undefined, { type: "unknown" })).toEqual({
      previews: [],
      contacts: [],
      loading: false,
    });
  });
});
