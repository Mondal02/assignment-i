import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './src/theme';
import { View, Platform } from 'react-native';
import { ScreenManager } from './src/navigation/ScreenManager';

// Dummy useFonts implementation (no assets)
function useFakeFonts() {
  return [true];
}

export default function App() {
  const [loaded] = useFakeFonts(); // always "loaded"
  const ViewAny:any = View;
  if (!loaded) return null;

  if (Platform.OS === 'web') {
    // Smooth fonts on web
    document.body.style.webkitFontSmoothing = 'antialiased';
    document.body.style.fontFamily = 'system-ui, -apple-system, Segoe UI, Roboto, Arial';
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <ViewAny style={{ flex: 1 }}>
          <ScreenManager />
          <StatusBar style="dark" />
        </ViewAny>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
