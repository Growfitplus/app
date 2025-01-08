import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { router, useNavigation } from 'expo-router';

import { LogoSVG } from '@/components/SVG';
import Profile from '../(profile)/profile';
import ProfileHeader from '@/components/Headers/Profile.header';
import { useUserContext } from '@/contexts/user/context';
import useStorage from '@/hooks/useStorage';
import { resetState } from '@/contexts/user/actions';

const Home = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [user, userDispatch] = useUserContext();
  const navigation = useNavigation();
  const { deleteStorage } = useStorage();

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
    await deleteStorage();

    userDispatch(resetState());
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
