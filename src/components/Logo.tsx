import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchContacts } from "../features/contacts/contactSlice";
import { getTheme } from "../features/themeSwitcher/themeSwitcherSlice";

/* Assets */
import logo from "../assets/img/logo.png";
import logoWhite from "../assets/img/logo-white.png";

export const Logo = () => {
  const theme = useAppSelector(getTheme);
  const logoToShow = useMemo(() => {
    if (theme === "light") {
      return logo;
    }

    if (theme === "dark") {
      return logoWhite;
    }
  }, [theme]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return <img src={logoToShow} alt="Logo" title="Logo" className="App-logo" />;
};
