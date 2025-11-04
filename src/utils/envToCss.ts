// Utility to inject environment variables into CSS custom properties
export const injectEnvToCss = () => {
  if (typeof window === 'undefined') return; // Server-side only

  const root = document.documentElement;
  
  // Primary Brand Colors
  root.style.setProperty('--env-gold-primary', process.env.NEXT_PUBLIC_COLOR_GOLD_PRIMARY || '#FFD700');
  root.style.setProperty('--env-gold-hover', process.env.NEXT_PUBLIC_COLOR_GOLD_HOVER || '#FFC800');
  root.style.setProperty('--env-gold-logo', process.env.NEXT_PUBLIC_COLOR_GOLD_LOGO || '#E9BC0A');
  
  // Text & Dark Colors
  root.style.setProperty('--env-text-primary', process.env.NEXT_PUBLIC_COLOR_TEXT_PRIMARY || '#222');
  root.style.setProperty('--env-text-black', process.env.NEXT_PUBLIC_COLOR_TEXT_BLACK || '#000');
  root.style.setProperty('--env-bg-dark', process.env.NEXT_PUBLIC_COLOR_BG_DARK || '#111');
  
  // Background Colors
  root.style.setProperty('--env-bg-white', process.env.NEXT_PUBLIC_COLOR_BG_WHITE || '#fff');
  root.style.setProperty('--env-bg-light', process.env.NEXT_PUBLIC_COLOR_BG_LIGHT || '#F9F9F9');
  root.style.setProperty('--env-bg-lighter', process.env.NEXT_PUBLIC_COLOR_BG_LIGHTER || '#fafafa');
  root.style.setProperty('--env-bg-gold-light', process.env.NEXT_PUBLIC_COLOR_BG_GOLD_LIGHT || '#FFF8E1');
  
  // Secondary Text Colors
  root.style.setProperty('--env-text-secondary', process.env.NEXT_PUBLIC_COLOR_TEXT_SECONDARY || '#555');
  root.style.setProperty('--env-text-muted', process.env.NEXT_PUBLIC_COLOR_TEXT_MUTED || '#666');
  root.style.setProperty('--env-text-faq', process.env.NEXT_PUBLIC_COLOR_TEXT_FAQ || '#444');
  
  // Status Colors
  root.style.setProperty('--env-success', process.env.NEXT_PUBLIC_COLOR_SUCCESS || '#4CAF50');
  root.style.setProperty('--env-error', process.env.NEXT_PUBLIC_COLOR_ERROR || '#f44336');
  root.style.setProperty('--env-error-alt', process.env.NEXT_PUBLIC_COLOR_ERROR_ALT || '#e32');
  
  // UI Element Colors
  root.style.setProperty('--env-border', process.env.NEXT_PUBLIC_COLOR_BORDER || '#e0e0e0');
  root.style.setProperty('--env-disabled-bg', process.env.NEXT_PUBLIC_COLOR_DISABLED_BG || '#f5f5f5');
  root.style.setProperty('--env-disabled-text', process.env.NEXT_PUBLIC_COLOR_DISABLED_TEXT || '#999');
  
  // Shadows
  const shadowLightOpacity = process.env.NEXT_PUBLIC_SHADOW_LIGHT_OPACITY || 0.05;
  const shadowMediumOpacity = process.env.NEXT_PUBLIC_SHADOW_MEDIUM_OPACITY || 0.07;
  const shadowStandardOpacity = process.env.NEXT_PUBLIC_SHADOW_STANDARD_OPACITY || 0.08;
  const shadowHeavyOpacity = process.env.NEXT_PUBLIC_SHADOW_HEAVY_OPACITY || 0.10;
  const shadowDropdownOpacity = process.env.NEXT_PUBLIC_SHADOW_DROPDOWN_OPACITY || 0.12;
  const shadowGoldFocusOpacity = process.env.NEXT_PUBLIC_SHADOW_GOLD_FOCUS_OPACITY || 0.1;
  const shadowGoldHoverOpacity = process.env.NEXT_PUBLIC_SHADOW_GOLD_HOVER_OPACITY || 0.15;
  const shadowGoldButtonOpacity = process.env.NEXT_PUBLIC_SHADOW_GOLD_BUTTON_OPACITY || 0.2;
  
  root.style.setProperty('--env-shadow-light', `rgba(0,0,0,${shadowLightOpacity})`);
  root.style.setProperty('--env-shadow-medium', `rgba(0,0,0,${shadowMediumOpacity})`);
  root.style.setProperty('--env-shadow-standard', `rgba(0,0,0,${shadowStandardOpacity})`);
  root.style.setProperty('--env-shadow-heavy', `rgba(0,0,0,${shadowHeavyOpacity})`);
  root.style.setProperty('--env-shadow-dropdown', `rgba(0,0,0,${shadowDropdownOpacity})`);
  root.style.setProperty('--env-shadow-gold-focus', `rgba(255, 215, 0, ${shadowGoldFocusOpacity})`);
  root.style.setProperty('--env-shadow-gold-hover', `rgba(255, 215, 0, ${shadowGoldHoverOpacity})`);
  root.style.setProperty('--env-shadow-gold-button', `rgba(255, 215, 0, ${shadowGoldButtonOpacity})`);
  
  // Overlays
  const overlayHeroOpacity = process.env.NEXT_PUBLIC_OVERLAY_HERO_OPACITY || 0.7;
  const overlayMobileOpacity = process.env.NEXT_PUBLIC_OVERLAY_MOBILE_OPACITY || 0.9;
  const overlayIconOpacity = process.env.NEXT_PUBLIC_OVERLAY_ICON_OPACITY || 0.08;
  
  root.style.setProperty('--env-overlay-hero', `rgba(0, 0, 0, ${overlayHeroOpacity})`);
  root.style.setProperty('--env-overlay-mobile', `rgba(0, 0, 0, ${overlayMobileOpacity})`);
  root.style.setProperty('--env-overlay-icon', `rgba(255,255,255,${overlayIconOpacity})`);
}; 