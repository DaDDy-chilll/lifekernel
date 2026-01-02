// hooks/useDynamicColors.ts
import { useColors } from './useColor';

export const useDynamicColors = () => {
  const { colors } = useColors();
  console.log('Current colors:', colors.primary);

  return {
    // Text styles
    textPrimary: { color: colors.primary },
    textSecondary: { color: colors.secondary },
    textBackground: { color: colors.background },
    textForeground: { color: colors.foreground },
    textCard: { color: colors.cardForeground },
    textMuted: { color: colors.mutedForeground },
    textAccent: { color: colors.accentForeground },
    textDestructive: { color: colors.destructive },

    // View styles
    bgPrimary: { backgroundColor: colors.primary },
    bgSecondary: { backgroundColor: colors.secondary },
    bgBackground: { backgroundColor: colors.background },
    bgCard: { backgroundColor: colors.card },
    bgMuted: { backgroundColor: colors.muted },
    bgAccent: { backgroundColor: colors.accent },
    bgDestructive: { backgroundColor: colors.destructive },
    bgBorder: { backgroundColor: colors.border },

    // Sidebar styles
    bgSidebar: { backgroundColor: colors.sidebar },
    textSidebar: { color: colors.sidebarForeground },
    bgSidebarPrimary: { backgroundColor: colors.sidebarPrimary },
    textSidebarPrimary: { color: colors.sidebarPrimaryForeground },
    bgSidebarAccent: { backgroundColor: colors.sidebarAccent },
    textSidebarAccent: { color: colors.sidebarAccentForeground },

    // Combined styles
    primaryText: (
      fontSize: number = 16,
      fontWeight: 'bold' | 'normal' = 'normal'
    ) => ({
      color: colors.primary,
      fontSize,
      fontWeight,
    }),

    // Get any color dynamically
    getColor: (colorName: keyof typeof colors) => colors[colorName],
  };
};
