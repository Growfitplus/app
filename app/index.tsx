import React, { useEffect } from 'react';
import { Pressable, SafeAreaView, View } from 'react-native';
import { router } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';

import { LogoLogIn } from '@/components/SVG/Logo';
import { useSession } from '@/contexts/session';
import { ArrowNextIcon } from '@/components/Icons';

import Typography from '@/components/Typography';
import { LogInStyles } from '@/styles/logIn';

const Login = () => {
  const { signIn, session } = useSession();

  useEffect(() => {
    if (session) {
      if (session.onboarding) {
        router.push('/(stack)/(onboarding)/start');
      } else {
        router.push('/(stack)/(tabs)/home');
      }
    }
  }, [session]);

  const logIn = () => {
    signIn({
      onboarding: true,
      username: 'eamzea',
    });
  };

  return (
    <SafeAreaView style={LogInStyles.main}>
      <View style={LogInStyles.logo}>
        <LogoLogIn />
      </View>
      <View style={LogInStyles.buttonContainer}>
        <Typography
          styles={LogInStyles.preButtonText}
          weight='medium'
        >
          Ingresa con
        </Typography>
        <Pressable
          style={LogInStyles.buttonBox}
          onPress={logIn}
        >
          <AntDesign
            name='google'
            size={24}
            color='black'
          />
          <Typography
            weight='bold'
            styles={LogInStyles.buttonText}
          >
            Google
          </Typography>
          <ArrowNextIcon
            size={24}
            color='black'
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Login;
