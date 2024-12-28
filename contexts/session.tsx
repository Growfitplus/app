import { useContext, createContext, type PropsWithChildren } from 'react';
import { useStorageState } from '@/hooks/useStorageState';

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

  return (
    <AuthContext.Provider
      value={{
        finishOnboarding: (username: string) => {
          setSession({
            onboarding: false,
            username,
          });
        },
        isLoading,
        session,
        signIn: (session: { username: string; onboarding: boolean }) => {
          setSession(session);
        },
        signOut: () => {
          setSession(null);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { useSession, SessionProvider };
