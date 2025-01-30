import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { router, useNavigation } from 'expo-router';

import { LogoSVG } from '@/components/SVG';
import Profile from '../(profile)/profile';
import ProfileHeader from '@/components/Headers/Profile.header';
import Container from '@/components/Container';
import Calories from '@/components/Calories';
import Walking from '@/components/Walking';
import Drinking from '@/components/Drinking';
import { runOnJS } from 'react-native-reanimated';

const Home = () => {
  const [showProfile, setShowProfile] = useState(false);
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
    'worklet';
    runOnJS(setShowProfile)(false);
    router.push('/(stack)/terms/terms');
  };

  const closeSheet = () => {
    'worklet';
    runOnJS(setShowProfile)(false);
  };

  return (
    <ScrollView
      style={{
        paddingTop: 24,
      }}
    >
      <KeyboardAvoidingView
        keyboardVerticalOffset={64}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          flex: 1,
        }}
      >
        <Container>
          <Pressable
            onPress={Keyboard.dismiss}
            style={{
              flex: 1,
              gap: 12,
            }}
          >
            <Calories />
            <View style={{ flexDirection: 'row', gap: 12 }}>
              <Walking />
              <Drinking />
            </View>
            <Profile
              isVisible={showProfile}
              handleAbout={handleAbout}
              closeSheet={closeSheet}
            />
          </Pressable>
        </Container>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Home;
