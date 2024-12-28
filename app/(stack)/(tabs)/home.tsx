import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { router, useNavigation } from 'expo-router';

import { Logo } from '@/components/svg/Logo';
import ProfileHeader from '@/components/Headers/Profile.header';
import { useSession } from '@/contexts/session';
import Profile from '../(profile)/profile';

const Home = () => {
  const [showProfile, setShowProfile] = useState(false);
  const navigation = useNavigation();
  const { signOut } = useSession();

  const handleExit = () => {
    signOut();
  };

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

  return (
    <>
      <View style={styles.main}>
        <Text>Home</Text>
      </View>
      <Pressable onPress={() => signOut()}>
        <Text>Sign Out</Text>
      </Pressable>
      <Profile
        isVisible={showProfile}
        handleAbout={handleAbout}
        handleExit={handleExit}
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
