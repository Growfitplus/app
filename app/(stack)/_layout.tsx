import React from 'react';
import { Redirect, router, Stack } from 'expo-router';

import { ArrowBackIcon } from '@/components/Icons';
import { Colors } from '@/constants/Colors';
import { useUserContext } from '@/contexts/user/context';

const StackLayout = () => {
  const [user] = useUserContext();

  if (!user.hasSession) {
    return <Redirect href='/' />;
  }

  return (
    <>
      <Stack
        screenOptions={{
          contentStyle: {
            backgroundColor: Colors.light['background+'],
          },
        }}
      >
        <Stack.Screen
          name='(onboarding)'
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='(tabs)'
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='terms/terms'
          options={{
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
            headerTintColor: 'transparent',
          }}
        />
      </Stack>
    </>
  );
};

export default StackLayout;
