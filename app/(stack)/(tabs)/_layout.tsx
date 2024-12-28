import { Redirect, Tabs } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

import { HapticTab } from '@/components/HapticTab';
import { useSession } from '@/contexts/session';
import Home from '@/components/svg/Home';
import Clock from '@/components/svg/Clock';
import { Colors } from '@/constants/Colors';
import HomeTab from '@/components/Tabs/Home.tab';
import ProgressTab from '@/components/Tabs/Progress.tab';
import TrainingTab from '@/components/Tabs/Training.tab';

const TabLayout = () => {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (!session) {
    return <Redirect href='/' />;
  }

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light['screen-bg'],
        },
        tabBarButton: HapticTab,
        tabBarItemStyle: { marginTop: 20 },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          height: 100,
        },
        headerTitleStyle: {
          color: 'transparent',
        },
        sceneStyle: {
          backgroundColor: Colors.light['screen-bg'],
        },
        headerShadowVisible: false,
      }}
    >
      <Tabs.Screen
        name='progress'
        options={{
          tabBarIcon: ProgressTab,
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name='home'
        options={{
          tabBarIcon: HomeTab,
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name='training'
        options={{
          tabBarIcon: TrainingTab,
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
