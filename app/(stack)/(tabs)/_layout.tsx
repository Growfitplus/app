import { Redirect, Tabs } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import Feather from '@expo/vector-icons/Feather';
import { useSession } from '@/contexts/session';
import Home from '@/components/svg/Home';
import Clock from '@/components/svg/Clock';

const TabLayout = () => {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: 'transparent'
        },
        tabBarButton: HapticTab,
        tabBarItemStyle: { marginTop: 20 },
        tabBarStyle: {
          height: 100,
          shadowOffset: {
            width: 0,
            height: 0, // for iOS
          },
          elevation: 0,
          zIndex: 0,
        },
        headerTitleStyle: {
          color: 'transparent'
        },
      }}
    >
      <Tabs.Screen
        name="progress"
        options={{
          tabBarIcon: ({focused}) => <View style={{backgroundColor: focused ? '#00FFC2' : 'none', width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 14,}}>
            <Feather name="camera" size={24} color="black" />
          </View>,
          tabBarShowLabel: false,
        }}
      />
        <Tabs.Screen
          name="home"
          options={{
            tabBarIcon: ({focused}) => <View style={{backgroundColor: focused ? '#00FFC2' : 'none', width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 14,}}>
            <Home/>
          </View>,
            tabBarShowLabel: false,
          }}
        />
      <Tabs.Screen
        name="training"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              backgroundColor: focused ? '#00FFC2' : 'none', width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 14,
            }}
            >
              <Clock/>
          </View>
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
}

export default TabLayout
