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
      action: SessionObject | null = null,
    ): [boolean, SessionObject | null] => [false, action],
    initialValue,
  ) as UseStateHook;
};

const setStorageItemAsync = async (key: string, value: string | null) => {
  if (Platform.OS === 'web') {
    try {
      if (value === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, value);
      }
    } catch (e) {
      console.error('Local storage is unavailable:', e);
    }
  } else {
    if (value == null) {
      await SecureStore.deleteItemAsync(key);
    } else {
      await SecureStore.setItemAsync(key, value);
    }
  }
};

const useStorageState = (key: string): UseStateHook => {
  // Public
  const [state, setState] = useAsyncState();

  // Get
  useEffect(() => {
    if (Platform.OS === 'web') {
      try {
        if (typeof localStorage !== 'undefined') {
          setState(JSON.parse(localStorage.getItem(key) ?? '') as SessionObject);
        }
      } catch (e) {
        console.error('Local storage is unavailable:', e);
      }
    } else {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      SecureStore.getItemAsync(key).then(value => {
        setState(JSON.parse(value ?? '') as SessionObject);
      });
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
