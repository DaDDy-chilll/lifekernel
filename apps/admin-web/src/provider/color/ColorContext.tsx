import { ADMIN_DEFAULT_THEME } from '@acme/constants';
import type { ColorTheme } from '@acme/types';
import { createContext } from 'react';

export const ColorContext = createContext<{
  colors: ColorTheme;
  setColors: (colors: ColorTheme) => void;
}>({
  colors: ADMIN_DEFAULT_THEME,
  setColors: () => {},
});
