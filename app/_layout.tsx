import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import { Slot } from 'expo-router';
import {
  RobotoMono_700Bold as RobotoBold,
  RobotoMono_500Medium as RobotoMedium,
  RobotoMono_400Regular as RobotoRegular,
  useFonts,
} from '@expo-google-fonts/roboto-mono';

import RootProvider from '@/contexts/root';
import UserProvider from '@/contexts/user/provider';
import StorageProvider from '@/contexts/storage/provider';

// eslint-disable-next-line @typescript-eslint/no-floating-promises
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded, error] = useFonts({
    RobotoBold,
    RobotoMedium,
    RobotoRegular,
  });

  useEffect(() => {
    if (loaded || error) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && error) {
    return null;
  }

  return (
    <RootProvider providers={[UserProvider, StorageProvider]}>
      <Slot />
    </RootProvider>
  );
};

export default RootLayout;
