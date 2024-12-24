import React from 'react'
import { Redirect, Stack } from 'expo-router';
import { useSession } from '@/contexts/session';
import { Text } from 'react-native';

const AppLayout = () => {
  const { session, isLoading } = useSession();

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/" />;
  }

  const {onboarding} = session

  if (!onboarding) {
      return <Redirect href="/home" />;
  }

  return (
    <>
      <Stack
        screenOptions={{
          headerLeft: () => <Text>Something</Text>
        }}
      >
        <Stack.Screen name="start" options={{ headerShown: false }} />
        <Stack.Screen name="height" options={{ headerShown: false }} />
        <Stack.Screen name="weight" options={{ headerShown: false }} />
        <Stack.Screen name="age" options={{ headerShown: false }} />
      </Stack>
    </>
  )
}

export default AppLayout
