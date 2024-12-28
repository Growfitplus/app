import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import { Slot } from 'expo-router';
import {
  RobotoMono_700Bold,
  RobotoMono_500Medium,
  RobotoMono_400Regular,
  useFonts,
} from '@expo-google-fonts/roboto-mono';
import { SessionProvider } from '@/contexts/session';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded, error] = useFonts({
    RobotoMono_700Bold,
    RobotoMono_500Medium,
    RobotoMono_400Regular,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
};

export default RootLayout;
