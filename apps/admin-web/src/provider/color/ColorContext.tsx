import { ADMIN_DEFAULT_THEME } from "@acme/constants";
import type { AdminTheme } from "@acme/types";
import { createContext } from "react";

export const ColorContext = createContext<{
  colors: AdminTheme;
  setColors: (colors: AdminTheme) => void;
}>({
  colors: ADMIN_DEFAULT_THEME,
  setColors: () => {},
});