import React from 'react';
import { Redirect, router, Stack } from 'expo-router';

import { ArrowBackIcon } from '@/components/Icons';
import { Colors } from '@/constants/Colors';
import { useUserContext } from '@/contexts/user/context';

const AppLayout = () => {
  const [user] = useUserContext();

  if (!user.hasSession) {
    return <Redirect href='/' />;
  }

  if (user.onboardingFinished) {
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
            backgroundColor: Colors.light['background+'],
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
        <Stack.Screen name='imc' />
      </Stack>
    </>
  );
};

export default AppLayout;
