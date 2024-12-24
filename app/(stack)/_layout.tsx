import { Redirect, Stack } from "expo-router";
import { Text, useColorScheme } from "react-native";
import React from 'react'
import { useSession } from "@/contexts/session";
import { StatusBar } from "expo-status-bar";

const StackLayout = () => {
  const colorScheme = useColorScheme();
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <>
      <Stack screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen
          name="(onboarding)" // This is the name of the page and must match the url from root
          />
        <Stack.Screen
          name="(tabs)"
          />
        <Stack.Screen
          name="terms/index"
          />
      </Stack>
      <StatusBar style={colorScheme || 'dark'} />
    </>

  );
};
export default StackLayout;
