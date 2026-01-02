/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    './App.tsx',
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        // Use actual color values for NativeWind (React Native)
        primary: 'oklch(0.55 0.16 150)',
        'primary-foreground': 'oklch(0.98 0.01 150)',
        secondary: 'oklch(0.92 0.05 150)',
        'secondary-foreground': 'oklch(0.18 0.04 150)',
        accent: 'oklch(0.9 0.06 150)',
        'accent-foreground': 'oklch(0.18 0.04 150)',
        destructive: 'oklch(0.58 0.24 27)',
        muted: 'oklch(0.95 0.02 150)',
        'muted-foreground': 'oklch(0.45 0.03 150)',
        background: 'oklch(0.99 0.03 30)',
        foreground: 'oklch(0.15 0.02 30)',
        card: 'oklch(1 0 0)',
        'card-foreground': 'oklch(0.15 0.02 30)',
        popover: 'oklch(1 0 0)',
        'popover-foreground': 'oklch(0.15 0.02 30)',
        border: 'oklch(0.9 0.02 150)',
        input: 'oklch(0.9 0.02 150)',
        ring: 'oklch(0.55 0.16 150)',

        // Sidebar colors
        sidebar: 'oklch(0.97 0.02 150)',
        sidebarForeground: 'oklch(0.15 0.02 30)',
        sidebarPrimary: 'oklch(0.55 0.16 150)',
        sidebarPrimaryForeground: 'oklch(0.98 0.01 150)',
        sidebarAccent: 'oklch(0.9 0.05 150)',
        sidebarAccentForeground: 'oklch(0.18 0.04 150)',
        sidebarBorder: 'oklch(0.88 0.02 150)',
        sidebarRing: 'oklch(0.55 0.16 150)',
      },
    },
  },
  plugins: [],
};
