import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import Login from '@/app/index';
import { useStorageContext } from '@/contexts/storage/context';
import { useUserContext } from '@/contexts/user/context';
import { logIn, setUsername } from '@/contexts/user/actions';
import { finishStorage, gettingStorage, settingStorage } from '@/contexts/storage/actions';
import { USER_STATE_TYPE } from '@/contexts/user/types';

jest.mock('expo-router', () => ({
  router: {
    push: jest.fn(),
  },
}));

jest.mock('expo-secure-store', () => ({
  getItemAsync: jest.fn(),
  setItemAsync: jest.fn(),
}));

jest.mock('@/contexts/storage/context', () => ({
  useStorageContext: jest.fn(),
}));

jest.mock('@/contexts/user/context', () => ({
  useUserContext: jest.fn(),
}));

jest.mock('@/contexts/user/actions', () => ({
  logIn: jest.fn(),
  setUsername: jest.fn(),
}));

jest.mock('@/contexts/storage/actions', () => ({
  finishStorage: jest.fn(),
  gettingStorage: jest.fn(),
  settingStorage: jest.fn(),
}));

describe('Login', () => {
  const mockUserDispatch = jest.fn();
  const mockStorageDispatch = jest.fn();

  beforeEach(() => {
    (useUserContext as jest.Mock).mockReturnValue([
      { hasSession: false, onboardingFinished: false },
      mockUserDispatch,
    ]);
    (useStorageContext as jest.Mock).mockReturnValue([{ isLoading: false }, mockStorageDispatch]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading indicator when isLoading is true', () => {
    (useStorageContext as jest.Mock).mockReturnValue([{ isLoading: true }, mockStorageDispatch]);

    const { queryByText } = render(<Login />);

    expect(queryByText('Ingresa con')).toBeFalsy();
  });

  it('renders login screen when isLoading is false', () => {
    const { getByText } = render(<Login />);

    expect(getByText('Ingresa con')).toBeTruthy();
  });

  it('calls signIn function when Google button is pressed', async () => {
    const { getByText } = render(<Login />);
    const googleButton = getByText('Google');

    fireEvent.press(googleButton);

    await waitFor(() => {
      expect(mockUserDispatch).toHaveBeenCalledWith(setUsername('eamzea'));
      expect(mockStorageDispatch).toHaveBeenCalledWith(settingStorage());
      expect(SecureStore.setItemAsync).toHaveBeenCalledWith(
        'session',
        JSON.stringify({
          hasSession: true,
          onboardingFinished: false,
          username: 'eamzea',
        }),
      );
      expect(mockStorageDispatch).toHaveBeenCalledWith(finishStorage());
      expect(router.push).toHaveBeenCalledWith('/(stack)/(onboarding)/start');
    });
  });

  it('loads storage data on mount', async () => {
    (SecureStore.getItemAsync as jest.Mock).mockResolvedValue(
      JSON.stringify({ hasSession: true, onboardingFinished: false }),
    );

    render(<Login />);

    await waitFor(() => {
      expect(mockStorageDispatch).toHaveBeenCalledWith(gettingStorage());
      expect(mockUserDispatch).toHaveBeenCalledWith(
        logIn({
          data: {},
          hasSession: true,
          onboardingFinished: false,
          username: 'eamzea',
        } as USER_STATE_TYPE),
      );
      expect(SecureStore.setItemAsync).toHaveBeenCalledWith(
        'session',
        JSON.stringify({ hasSession: true, onboardingFinished: false }),
      );
      expect(router.push).toHaveBeenCalledWith('/(stack)/(onboarding)/start');
      expect(mockStorageDispatch).toHaveBeenCalledWith(finishStorage());
    });
  });

  it('handles SecureStore errors gracefully', async () => {
    (SecureStore.getItemAsync as jest.Mock).mockRejectedValue(
      new Error('Secure Store is unavailable'),
    );

    jest.spyOn(console, 'error').mockImplementationOnce(jest.fn);

    render(<Login />);

    await waitFor(() => {
      expect(mockStorageDispatch).toHaveBeenCalledWith(gettingStorage());
      expect(console.error).toHaveBeenCalledWith(
        'Secure Store is unavailable:',
        new Error('Secure Store is unavailable'),
      );
      expect(mockStorageDispatch).toHaveBeenCalledWith(finishStorage());
    });
  });
});
