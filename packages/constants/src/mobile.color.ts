import { ColorTheme } from '@acme/types';

export const MOBILE_DEFAULT_THEME: ColorTheme = {
  radius: '0.625rem',

  background: '#FFFBF0', // oklch(0.99 0.03 30)
  foreground: '#2C2C2C', // oklch(0.15 0.02 30)

  card: '#FFFFFF', // oklch(1 0 0)
  cardForeground: '#2C2C2C', // oklch(0.15 0.02 30)

  popover: '#FFFFFF', // oklch(1 0 0)
  popoverForeground: '#2C2C2C', // oklch(0.15 0.02 30)

  primary: '#0066CC', // oklch(0.55 0.16 150)
  primaryForeground: '#F8F8F8', // oklch(0.98 0.01 150)

  secondary: '#E8F4F8', // oklch(0.92 0.05 150)
  secondaryForeground: '#2E3E42', // oklch(0.18 0.04 150)

  muted: '#F0F7F9', // oklch(0.95 0.02 150)
  mutedForeground: '#6B7C80', // oklch(0.45 0.03 150)

  accent: '#D1E7ED', // oklch(0.9 0.06 150)
  accentForeground: '#2E3E42', // oklch(0.18 0.04 150)

  destructive: '#CC4125', // oklch(0.58 0.24 27)

  border: '#E0E7E9', // oklch(0.9 0.02 150)
  input: '#E0E7E9', // oklch(0.9 0.02 150)
  ring: '#0066CC', // oklch(0.55 0.16 150)

  sidebar: '#F5F8F9', // oklch(0.97 0.02 150)
  sidebarForeground: '#2C2C2C', // oklch(0.15 0.02 150)
  sidebarPrimary: '#0066CC', // oklch(0.55 0.16 150)
  sidebarPrimaryForeground: '#F8F8F8', // oklch(0.98 0.01 150)
  sidebarAccent: '#D1E7ED', // oklch(0.9 0.05 150)
  sidebarAccentForeground: '#2E3E42', // oklch(0.18 0.04 150)
  sidebarBorder: '#DDE4E6', // oklch(0.88 0.02 150)
  sidebarRing: '#0066CC', // oklch(0.55 0.16 150)
};

export const MOBILE_DARK_THEME: ColorTheme = {
  ...MOBILE_DEFAULT_THEME,
  background: '#1A1A1A',
  foreground: '#F0F0F0',
  card: '#2A2A2A',
  cardForeground: '#F0F0F0',
  popover: '#2A2A2A',
  popoverForeground: '#F0F0F0',
  primary: '#4A90E2',
  primaryForeground: '#FFFFFF',
  secondary: '#3A3A3A',
  secondaryForeground: '#F0F0F0',
  muted: '#333333',
  mutedForeground: '#CCCCCC',
  accent: '#444444',
  accentForeground: '#F0F0F0',
  destructive: '#D32F2F',
  border: '#444444',
  input: '#444444',
  ring: '#4A90E2',
  sidebar: '#222222',
  sidebarForeground: '#F0F0F0',
  sidebarPrimary: '#4A90E2',
  sidebarPrimaryForeground: '#FFFFFF',
  sidebarAccent: '#444444',
  sidebarAccentForeground: '#F0F0F0',
  sidebarBorder: '#333333',
  sidebarRing: '#4A90E2',
};
