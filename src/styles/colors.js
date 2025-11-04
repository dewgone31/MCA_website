// Color palette for Goldrock Financial (now using direct env references)
export const colors = {
  // Primary Brand Colors
  goldPrimary: process.env.NEXT_PUBLIC_COLOR_GOLD_PRIMARY || '#FFD700',
  goldHover: process.env.NEXT_PUBLIC_COLOR_GOLD_HOVER || '#FFC800',
  goldLogo: process.env.NEXT_PUBLIC_COLOR_GOLD_LOGO || '#E9BC0A',
  
  // Text & Dark Colors
  textPrimary: process.env.NEXT_PUBLIC_COLOR_TEXT_PRIMARY || '#222',
  textBlack: process.env.NEXT_PUBLIC_COLOR_TEXT_BLACK || '#000',
  bgDark: process.env.NEXT_PUBLIC_COLOR_BG_DARK || '#111',
  
  // Background Colors
  bgWhite: process.env.NEXT_PUBLIC_COLOR_BG_WHITE || '#fff',
  bgLight: process.env.NEXT_PUBLIC_COLOR_BG_LIGHT || '#F9F9F9',
  bgLighter: process.env.NEXT_PUBLIC_COLOR_BG_LIGHTER || '#fafafa',
  bgGoldLight: process.env.NEXT_PUBLIC_COLOR_BG_GOLD_LIGHT || '#FFF8E1',
  
  // Secondary Text Colors
  textSecondary: process.env.NEXT_PUBLIC_COLOR_TEXT_SECONDARY || '#555',
  textMuted: process.env.NEXT_PUBLIC_COLOR_TEXT_MUTED || '#666',
  textFaq: process.env.NEXT_PUBLIC_COLOR_TEXT_FAQ || '#444',
  
  // Status Colors
  success: process.env.NEXT_PUBLIC_COLOR_SUCCESS || '#4CAF50',
  error: process.env.NEXT_PUBLIC_COLOR_ERROR || '#f44336',
  errorAlt: process.env.NEXT_PUBLIC_COLOR_ERROR_ALT || '#e32',
  
  // UI Element Colors
  border: process.env.NEXT_PUBLIC_COLOR_BORDER || '#e0e0e0',
  disabledBg: process.env.NEXT_PUBLIC_COLOR_DISABLED_BG || '#f5f5f5',
  disabledText: process.env.NEXT_PUBLIC_COLOR_DISABLED_TEXT || '#999',
  
  // Transparency Effects
  shadows: {
    light: `rgba(0,0,0,${process.env.NEXT_PUBLIC_SHADOW_LIGHT_OPACITY || 0.05})`,
    medium: `rgba(0,0,0,${process.env.NEXT_PUBLIC_SHADOW_MEDIUM_OPACITY || 0.07})`,
    standard: `rgba(0,0,0,${process.env.NEXT_PUBLIC_SHADOW_STANDARD_OPACITY || 0.08})`,
    heavy: `rgba(0,0,0,${process.env.NEXT_PUBLIC_SHADOW_HEAVY_OPACITY || 0.10})`,
    dropdown: `rgba(0,0,0,${process.env.NEXT_PUBLIC_SHADOW_DROPDOWN_OPACITY || 0.12})`,
    goldFocus: `rgba(255, 215, 0, ${process.env.NEXT_PUBLIC_SHADOW_GOLD_FOCUS_OPACITY || 0.1})`,
    goldHover: `rgba(255, 215, 0, ${process.env.NEXT_PUBLIC_SHADOW_GOLD_HOVER_OPACITY || 0.15})`,
    goldButton: `rgba(255, 215, 0, ${process.env.NEXT_PUBLIC_SHADOW_GOLD_BUTTON_OPACITY || 0.2})`,
  },
  
  overlays: {
    hero: `rgba(0, 0, 0, ${process.env.NEXT_PUBLIC_OVERLAY_HERO_OPACITY || 0.7})`,
    mobile: `rgba(0, 0, 0, ${process.env.NEXT_PUBLIC_OVERLAY_MOBILE_OPACITY || 0.9})`,
    icon: `rgba(255,255,255,${process.env.NEXT_PUBLIC_OVERLAY_ICON_OPACITY || 0.08})`,
  }
};

// Helper function to get CSS variable
export const getCssVar = (variableName) => {
  return `var(--${variableName})`;
};

// Common color combinations
export const themes = {
  primary: {
    background: colors.goldPrimary,
    text: colors.textPrimary,
    hover: colors.goldHover,
  },
  secondary: {
    background: colors.bgWhite,
    text: colors.textPrimary,
    border: colors.goldPrimary,
  },
  dark: {
    background: colors.bgDark,
    text: colors.bgWhite,
    accent: colors.goldPrimary,
  },
  light: {
    background: colors.bgLight,
    text: colors.textPrimary,
    accent: colors.goldPrimary,
  }
}; 