import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ColorProvider } from '../provider';
import '../global.css';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  return (
    <ColorProvider>
      <ThemeProvider value={DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          {/* <Stack.Screen
          name="modal"
          options={{ presentation: 'modal', title: 'Modal' }}
        /> */}
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </ColorProvider>
  );
}
