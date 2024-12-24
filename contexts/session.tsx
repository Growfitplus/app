import { useStorageState } from '@/hooks/useStorageState';
import { router } from 'expo-router';
import { useContext, createContext, type PropsWithChildren, useEffect } from 'react';

const AuthContext = createContext<{
  signIn: (session: {
    username: string;
    onboarding: boolean
  }) => void;
  finishOnboarding: (username: string) => void;
  signOut: () => void;
  session?: {
    username: string;
    onboarding: boolean
  } | null;
  isLoading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  finishOnboarding: () => null,
  session: null,
  isLoading: false,
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
}

const SessionProvider = ({ children }: PropsWithChildren) => {
  const [[isLoading, session], setSession] = useStorageState('session');

  useEffect(() => {
    // return () => setSession(null)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn: (session:{
          username: string;
          onboarding: boolean
        }) => {
          // Perform sign-in logic here
          setSession(session);
        },
        finishOnboarding: (username: string) => {
          setSession({
            username,
            onboarding: false
          })
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export {
  useSession,
  SessionProvider
}
