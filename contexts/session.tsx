import { useContext, createContext, type PropsWithChildren } from 'react';
import { useStorageState } from '@/hooks/useStorageState';

/* istanbul ignore next */
const AuthContext = createContext<{
  // eslint-disable-next-line func-call-spacing
  signIn: (session: { username: string; onboarding: boolean }) => void;
  finishOnboarding: (username: string) => void;
  signOut: () => void;
  session?: {
    username: string;
    onboarding: boolean;
  } | null;
  isLoading: boolean;
}>({
  finishOnboarding: () => null,
  isLoading: false,
  session: null,
  signIn: () => null,
  signOut: () => null,
});

// This hook can be used to access the user info.
const useSession = () => {
  const value = useContext(AuthContext);

  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
};

const SessionProvider = ({ children }: PropsWithChildren) => {
  const [[isLoading, session], setSession] = useStorageState('session');

  const finishOnboarding = (username: string) => {
    setSession({ onboarding: false, username });
  };

  const signIn = (session: { username: string; onboarding: boolean }) => {
    setSession(session);
  };

  const signOut = () => {
    setSession(null);
  };

  return (
    <AuthContext.Provider
      value={{
        finishOnboarding,
        isLoading,
        session,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { useSession, SessionProvider };
