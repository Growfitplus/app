import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { router } from 'expo-router';
import { useSession } from '@/contexts/session';
import Login from '@/app/index';

jest.mock('expo-router', () => ({
  router: {
    push: jest.fn(),
  },
}));

jest.mock('@/contexts/session', () => ({
  useSession: jest.fn(),
}));

describe('Login', () => {
  const mockPush = jest.fn();
  const mockSignIn = jest.fn();

  beforeEach(() => {
    router.push = mockPush;
    (useSession as jest.Mock).mockReturnValue({
      session: null,
      signIn: mockSignIn,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
    const { toJSON } = render(<Login />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { getByText } = render(<Login />);

    expect(getByText('Ingresa con')).toBeTruthy();
    expect(getByText('Google')).toBeTruthy();
  });

  it('should call signIn when the button is pressed', () => {
    const { getByText } = render(<Login />);

    fireEvent.press(getByText('Google'));
    expect(mockSignIn).toHaveBeenCalledWith({
      onboarding: true,
      username: 'eamzea',
    });
  });

  it('should navigate to onboarding if session onboarding is true', () => {
    (useSession as jest.Mock).mockReturnValue({
      session: { onboarding: true },
      signIn: mockSignIn,
    });
    render(<Login />);
    expect(mockPush).toHaveBeenCalledWith('/(stack)/(onboarding)/start');
  });

  it('should navigate to home if session onboarding is false', () => {
    (useSession as jest.Mock).mockReturnValue({
      session: { onboarding: false },
      signIn: mockSignIn,
    });
    render(<Login />);
    expect(mockPush).toHaveBeenCalledWith('/(stack)/(tabs)/home');
  });
});
