import { useEffect, useCallback, useReducer } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

interface SessionObject {
  username: string;
  onboarding: boolean;
}

type UseStateHook = [[boolean, SessionObject], (value: SessionObject | null) => void];

const useAsyncState = (
  initialValue: [boolean, SessionObject | null] = [true, null],
): UseStateHook => {
  return useReducer(
    (
      state: [boolean, SessionObject | null],
      action: SessionObject,
    ): [boolean, SessionObject | null] => [false, action],
    initialValue,
  ) as UseStateHook;
};

const setStorageItemAsync = async (key: string, value: string | null) => {
  if (Platform.OS !== 'web') {
    try {
      if (value == null) {
        await SecureStore.deleteItemAsync(key);
      } else {
        await SecureStore.setItemAsync(key, value);
      }
    } catch (e) {
      console.error('Secure Store is unavailable:', e);
    }
  }
};

const useStorageState = (key: string): UseStateHook => {
  // Public
  const [state, setState] = useAsyncState();

  // Get
  useEffect(() => {
    if (Platform.OS !== 'web') {
      try {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        SecureStore.getItemAsync(key).then(value => {
          setState(value ? (JSON.parse(value) as SessionObject) : null);
        });
      } catch (e) {
        console.error('Session storage is unavailable:', e);
      }
    }
  }, [key]);

  // Set
  const setValue = useCallback(
    (value: { username: string; onboarding: boolean } | null) => {
      setState(value);
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      setStorageItemAsync(key, JSON.stringify(value));
    },
    [key],
  );

  return [state, setValue];
};

export { setStorageItemAsync, useStorageState };
