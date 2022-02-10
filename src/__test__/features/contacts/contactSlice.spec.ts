import contactReducer, {
  ContactState,
} from "../../../features/contacts/contactSlice";

describe("contact reducer", () => {
  const initialState: ContactState = {
    data: [],
    loading: false,
  };

  it("should handle initial state", () => {
    expect(contactReducer(undefined, { type: "unknown" })).toEqual({
      data: [],
      loading: false,
    });
  });
});
