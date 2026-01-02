"use client"
import { USER_DEFAULT_THEME } from "@acme/constants";
import type { ColorTheme } from "@acme/types";
import { useEffect, useState } from "react";
import { ColorContext } from "./ColorContext";

export const ColorProvider = ({ children }: { children: React.ReactNode }) => {
  const [colors, setColors] = useState<ColorTheme>(USER_DEFAULT_THEME);

  useEffect(() => {
    Object.entries(colors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value as string);
    });
  }, [colors]);

  return (
    <ColorContext.Provider value={{ colors, setColors }}>
      {children}
    </ColorContext.Provider>
  );
};