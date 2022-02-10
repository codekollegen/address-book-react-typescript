import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import contactReducer from "../features/contacts/contactSlice";
import themeSwitcherReducer from "../features/themeSwitcher/themeSwitcherSlice";

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    themeSwitcher: themeSwitcherReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
