/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { render, act, renderHook } from '@testing-library/react-native';
import { useSession, SessionProvider } from '@/contexts/session';
import { useStorageState } from '@/hooks/useStorageState';
import React from 'react';

jest.mock('@/hooks/useStorageState');

interface ContextValue {
  signIn: (session: { username: string; onboarding: boolean }) => void;
  finishOnboarding: (username: string) => void;
  signOut: () => void;
  session?: {
    username: string;
    onboarding: boolean;
  } | null;
  isLoading: boolean;
}

describe('SessionProvider', () => {
  const mockUseStorageState = useStorageState as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'error').mockImplementation(jest.fn());
    mockUseStorageState.mockReturnValue([[false, null], jest.fn()]);
  });

  it('provides initial context values', () => {
    let contextValue;
    const TestComponent = () => {
      contextValue = useSession();
      return null;
    };

    render(
      <SessionProvider>
        <TestComponent />
      </SessionProvider>,
    );

    expect(contextValue).toEqual({
      finishOnboarding: expect.any(Function),
      isLoading: false,
      session: null,
      signIn: expect.any(Function),
      signOut: expect.any(Function),
    });
  });

  it('signIn updates the session', () => {
    const setSession = jest.fn();

    mockUseStorageState.mockReturnValue([[false, null], setSession]);

    const TestComponent = () => {
      const { signIn } = useSession();

      act(() => {
        signIn({ onboarding: true, username: 'testuser' });
      });

      expect(setSession).toHaveBeenCalledWith({ onboarding: true, username: 'testuser' });

      return null;
    };

    render(
      <SessionProvider>
        <TestComponent />
      </SessionProvider>,
    );
  });

  it('signOut clears the session', () => {
    const setSession = jest.fn();

    mockUseStorageState.mockReturnValue([
      [false, { onboarding: true, username: 'testuser' }],
      setSession,
    ]);

    let contextValue: ContextValue;
    const TestComponent = () => {
      contextValue = useSession();
      return null;
    };

    render(
      <SessionProvider>
        <TestComponent />
      </SessionProvider>,
    );

    act(() => {
      contextValue.signOut();
    });

    expect(setSession).toHaveBeenCalledWith(null);
  });

  it('finishOnboarding updates the onboarding status', () => {
    const setSession = jest.fn();

    mockUseStorageState.mockReturnValue([
      [false, { onboarding: true, username: 'testuser' }],
      setSession,
    ]);

    let contextValue: ContextValue;
    const TestComponent = () => {
      contextValue = useSession();
      return null;
    };

    render(
      <SessionProvider>
        <TestComponent />
      </SessionProvider>,
    );

    act(() => {
      contextValue.finishOnboarding('testuser');
    });

    expect(setSession).toHaveBeenCalledWith({ onboarding: false, username: 'testuser' });
  });
});

describe('useSession', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
    jest.spyOn(console, 'error').mockImplementation(jest.fn());
  });

  it('should provide session context when wrapped in SessionProvider', () => {
    jest.spyOn(React, 'useContext').mockReturnValue({
      finishOnboarding: () => null,
      isLoading: false,
      session: null,
      signIn: () => null,
      signOut: () => null,
    });

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <SessionProvider>{children}</SessionProvider>
    );

    const { result } = renderHook(() => useSession(), { wrapper });

    expect(result.current).toEqual({
      finishOnboarding: expect.any(Function),
      isLoading: false,
      session: null,
      signIn: expect.any(Function),
      signOut: expect.any(Function),
    });
  });

  it('should throw an error if not wrapped in SessionProvider', () => {
    jest.spyOn(React, 'useContext').mockReturnValueOnce(null);

    expect(() => renderHook(() => useSession())).toThrow(
      'useSession must be wrapped in a <SessionProvider />',
    );
  });

  it('should return value if production env enabled', () => {
    jest.spyOn(React, 'useContext').mockReturnValueOnce(null);
    process.env = {
      NODE_ENV: 'production',
    };

    const { result } = renderHook(() => useSession());

    expect(result.current).toBe(null);
  });
});
