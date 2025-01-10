import React, { useEffect } from 'react';
import { Redirect, Tabs } from 'expo-router';
import * as SecureStore from 'expo-secure-store';

import { HapticTab } from '@/components/HapticTab';
import { Colors } from '@/constants/Colors';
import HomeTab from '@/components/Tabs/Home.tab';
import ProgressTab from '@/components/Tabs/Progress.tab';
import TrainingTab from '@/components/Tabs/Training.tab';
import { useUserContext } from '@/contexts/user/context';
import { useStorageContext } from '@/contexts/storage/context';
import { finishStorage, settingStorage } from '@/contexts/storage/actions';

const TabOptions = {
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: Colors.light['background+'],
  },
  headerTitleStyle: {
    color: 'transparent',
  },
  sceneStyle: {
    backgroundColor: Colors.light['background+'],
  },
  tabBarButton: HapticTab,
  tabBarItemStyle: { marginTop: 20 },
  tabBarStyle: {
    borderTopWidth: 0,
    elevation: 0,
    height: 85,
  },
};

const TabLayout = () => {
  const [user] = useUserContext();
  const [, storageDispatch] = useStorageContext();

  useEffect(() => {
    if (!user.hasSession) {
      handleExit();
    }
  }, [user.hasSession]);

  if (!user.hasSession) {
    return <Redirect href='/' />;
  }

  const handleExit = () => {
    storageDispatch(settingStorage());

    SecureStore.setItemAsync('session', JSON.stringify(user))
      .then(() => {
        return <Redirect href='/' />;
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        storageDispatch(finishStorage());
      });
  };

  return (
    <Tabs screenOptions={TabOptions}>
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
