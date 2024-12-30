import { act, renderHook } from '@testing-library/react-native';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import { useStorageState, setStorageItemAsync } from '@/hooks/useStorageState';

jest.mock('expo-secure-store');

describe('useStorageState', () => {
  const key = 'testKey';
  const mockSessionObject = { onboarding: true, username: 'testUser' };

  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'error').mockImplementation(jest.fn());
    Platform.OS = 'ios';
  });

  it('should initialize with default state', () => {
    const { result } = renderHook(() => useStorageState(key));
    const [state] = result.current;

    expect(state).toEqual([true, null]);
  });

  it('should retrieve and set state from SecureStore', () => {
    (SecureStore.getItemAsync as jest.Mock).mockResolvedValue(JSON.stringify(mockSessionObject));

    const { result } = renderHook(() => useStorageState(key));

    const [state] = result.current;

    expect(state).toEqual([true, null]);
  });

  it('should handle invalid JSON gracefully', () => {
    (SecureStore.getItemAsync as jest.Mock).mockResolvedValue(null);

    const { result } = renderHook(() => useStorageState(key));

    expect(result.current[0]).toEqual([true, null]);
  });

  it('should not retrieve and set state from SecureStore', () => {
    Platform.OS = 'web';
    (SecureStore.getItemAsync as jest.Mock).mockResolvedValue(JSON.stringify(mockSessionObject));

    const { result } = renderHook(() => useStorageState(key));

    const [state] = result.current;

    expect(state).toEqual([true, null]);
  });

  it('should handle setting a new value', () => {
    const { result } = renderHook(() => useStorageState(key));
    const [, setValue] = result.current;

    act(() => {
      setValue(mockSessionObject);
    });

    const [state] = result.current;

    expect(state).toEqual([false, mockSessionObject]);
    expect(SecureStore.setItemAsync).toHaveBeenCalledWith(key, JSON.stringify(mockSessionObject));
  });

  it('should handle deleting a value', () => {
    const { result } = renderHook(() => useStorageState(key));
    const [, setValue] = result.current;

    act(() => {
      setValue(null);
    });

    const [state] = result.current;

    expect(state).toEqual([false, null]);
  });
});

describe('setStorageItemAsync', () => {
  const key = 'testKey';
  const value = 'testValue';

  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'error').mockImplementation(jest.fn());
    Platform.OS = 'ios';
  });

  it('should not call SecureStore', async () => {
    Platform.OS = 'web';

    await setStorageItemAsync(key, value);

    expect(SecureStore.setItemAsync).not.toHaveBeenCalled();
  });

  it('should set item in SecureStore', async () => {
    await setStorageItemAsync(key, value);

    expect(SecureStore.setItemAsync).toHaveBeenCalledWith(key, value);
  });

  it('should delete item from SecureStore', async () => {
    await setStorageItemAsync(key, null);

    expect(SecureStore.deleteItemAsync).toHaveBeenCalledWith(key);
  });

  it('should handle SecureStore retrieval error', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(jest.fn());

    (SecureStore.deleteItemAsync as jest.Mock).mockRejectedValue(new Error('SecureStore error'));
    (SecureStore.setItemAsync as jest.Mock).mockRejectedValue(new Error('SecureStore error'));

    await setStorageItemAsync(key, null);

    expect(consoleErrorSpy).toHaveBeenCalledWith('Secure Store is unavailable:', expect.any(Error));
    consoleErrorSpy.mockRestore();
  });
});
