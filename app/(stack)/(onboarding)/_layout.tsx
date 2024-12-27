import React from 'react';
import { Redirect, router, Stack } from 'expo-router';
import { Text } from 'react-native';

import { useSession } from '@/contexts/session';
import { ArrowBackIcon } from '@/components/Icons';

const AppLayout = () => {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href='/' />;
  }

  const { onboarding } = session;

  if (!onboarding) {
    return <Redirect href='/home' />;
  }

  return (
    <>
      <Stack
        screenOptions={{
          headerLeft: () => (
            <ArrowBackIcon
              size={24}
              color='black'
              onPress={() => router.back()}
            />
          ),
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTitleStyle: {
            color: 'transparent',
          },
        }}
      >
        <Stack.Screen name='start' />
        <Stack.Screen name='height' />
        <Stack.Screen name='weight' />
        <Stack.Screen name='age' />
      </Stack>
    </>
  );
};

export default AppLayout;
