import React from 'react';
import { Redirect, router, Stack } from 'expo-router';
import { Text, useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { useSession } from '@/contexts/session';
import { ArrowBackIcon } from '@/components/Icons';

const StackLayout = () => {
  const colorScheme = useColorScheme();
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (!session) {
    return <Redirect href='/' />;
  }

  return (
    <>
      <Stack>
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
        <Stack.Screen name='terms/terms' options={{
          headerLeft: () => (
            <ArrowBackIcon
              size={24}
              color='black'
              onPress={() => router.back()}
            />
          ),
          headerTintColor: 'transparent',
          headerStyle: {
            backgroundColor: 'rgb(248, 250, 255)',
          },
          headerShadowVisible: false,
        }} />
      </Stack>
      <StatusBar style={colorScheme === 'light' ? 'dark' : 'light'} />
    </>
  );
};
export default StackLayout;
