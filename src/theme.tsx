import React, { createContext, useContext } from 'react';
import { TextStyle, ViewStyle } from 'react-native';

// Tokens
export const colors = {
  bg: '#FFFFFF',
  surface: '#F8FAFC',
  text: '#0F172A',
  muted: '#64748B',
  primary: '#1E40AF',
  chipBg: '#EEF2FF',
  chipText: '#1E3A8A',
  border: '#E2E8F0',
  success: '#16A34A',
  danger: '#DC2626',
  shadow: '#0F172A',
};

export const spacing = (n: number) => n * 4;
export const radii = { xs: 6, sm: 8, md: 12, lg: 16, xl: 24 };

export const type = {
  h1: { fontFamily: 'InterSemiBold', fontSize: 24, lineHeight: 30, color: colors.text } as TextStyle,
  h2: { fontFamily: 'InterSemiBold', fontSize: 18, lineHeight: 24, color: colors.text } as TextStyle,
  body: { fontFamily: 'InterRegular', fontSize: 14, lineHeight: 20, color: colors.text } as TextStyle,
  caption: { fontFamily: 'InterRegular', fontSize: 12, lineHeight: 16, color: colors.muted } as TextStyle,
};

export const shadowCard: ViewStyle = {
  shadowColor: colors.shadow,
  shadowOffset: { width: 0, height: 8 },
  shadowOpacity: 0.08,
  shadowRadius: 24,
  elevation: 4,
};

// Theme type
export type Theme = {
  colors: typeof colors;
  spacing: typeof spacing;
  radii: typeof radii;
  type: typeof type;
  shadowCard: ViewStyle;
};

// Provide a concrete default value
const defaultTheme: Theme = { colors, spacing, radii, type, shadowCard };

// Create context with explicit type
const ThemeCtx = createContext<Theme>(defaultTheme);

// Provider (function, not arrow React.FC)
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const Provider: any = ThemeCtx.Provider;
  return <Provider value={defaultTheme}>{children}</Provider>;
}

// Hook
export function useTheme(): Theme {
  return useContext(ThemeCtx);
}
