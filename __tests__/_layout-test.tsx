import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from '@expo-google-fonts/roboto-mono';
import RootLayout from '@/app/_layout';

jest.mock('expo-splash-screen', () => ({
  hideAsync: jest.fn(),
  preventAutoHideAsync: jest.fn(),
}));

jest.mock('@expo-google-fonts/roboto-mono', () => ({
  useFonts: jest.fn(),
}));

jest.mock('expo-router', () => ({
  Slot: () => <></>,
}));

describe('RootLayout', () => {
  it('renders null when fonts are not loaded and no error', () => {
    (useFonts as jest.Mock).mockReturnValue([false, null]);

    const { queryByTestId } = render(<RootLayout />);

    expect(queryByTestId('root-layout')).toBeNull();
  });

  it('hides splash screen when fonts are loaded', async () => {
    (useFonts as jest.Mock).mockReturnValue([true, null]);

    render(<RootLayout />);

    await waitFor(() => {
      expect(SplashScreen.hideAsync).toHaveBeenCalled();
    });
  });

  it('hides splash screen when there is an error loading fonts', async () => {
    (useFonts as jest.Mock).mockReturnValue([false, new Error('Error loading fonts')]);

    render(<RootLayout />);

    await waitFor(() => {
      expect(SplashScreen.hideAsync).toHaveBeenCalled();
    });
  });
});
