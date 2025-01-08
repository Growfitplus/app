import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { router, useNavigation } from 'expo-router';
import * as SecureStore from 'expo-secure-store';

import { LogoSVG } from '@/components/SVG';
import Profile from '../(profile)/profile';
import ProfileHeader from '@/components/Headers/Profile.header';
import { useUserContext } from '@/contexts/user/context';
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
          <LogoSVG />
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
      <Pressable
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onPress={handleRemove}
      >
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
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default Home;
