import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export type ThemeSwitcherState = {
  theme: string;
};

const initialState: ThemeSwitcherState = {
  theme: "light",
};

export const themeSwitcherSlice = createSlice({
  name: "themeSwitcher",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSwitcherSlice.actions;

export const getTheme = (state: RootState) => state.themeSwitcher.theme;

export default themeSwitcherSlice.reducer;
