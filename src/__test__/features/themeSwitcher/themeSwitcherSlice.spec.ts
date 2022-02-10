import themeSwitcherReducer from "../../../features/themeSwitcher/themeSwitcherSlice";

describe("themeSwitcher reducer", () => {
  it("should handle initial state", () => {
    expect(themeSwitcherReducer(undefined, { type: "unknown" })).toEqual({
      theme: "light",
    });
  });
});
