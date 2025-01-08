import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { router, useNavigation } from 'expo-router';

import Profile from '../(profile)/profile';
import ProfileHeader from '@/components/Headers/Profile.header';
import { Logo } from '@/components/SVG/Logo';
import { useUserContext } from '@/contexts/user/context';
import * as SecureStore from 'expo-secure-store';
import { useStorageContext } from '@/contexts/storage/context';
import { deletingStorage, finishStorage } from '@/contexts/storage/actions';

const Home = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [user] = useUserContext();
  const [, storageDispatch] = useStorageContext();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <Logo />
        </View>
      ),
      headerRight: () => <ProfileHeader handleProfile={() => setShowProfile(true)} />,
    });
  }, [navigation]);

  const handleAbout = () => {
    router.push('/(stack)/terms/terms');
    setShowProfile(false);
  };

  const handleRemove = async () => {
    try {
      storageDispatch(deletingStorage());
      await SecureStore.deleteItemAsync('session');
    } catch (error) {
      console.error(error);
    } finally {
      storageDispatch(finishStorage());
    }
  };

  return (
    <>
      <View style={styles.main}>
        <Text>Home</Text>
        <Text>{JSON.stringify(user)}</Text>
      </View>
      <Pressable onPress={handleRemove}>
        <Text>Remove Storage</Text>
      </Pressable>
      <Profile
        isVisible={showProfile}
        handleAbout={handleAbout}
      />
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
