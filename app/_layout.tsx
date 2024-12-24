import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import { SessionProvider } from '@/contexts/session';
import { Slot } from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}

export default RootLayout
