import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { useEffect } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

import { LogoLogIn } from '@/components/svg/Logo';
import { useSession } from '@/contexts/session';
import { ArrowNextIcon } from '@/components/Icons';
import { Colors } from '@/constants/Colors';
import Typography from '@/components/Typography';

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

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.logo}>
        <LogoLogIn />
      </View>
      <View style={styles.buttonContainer}>
        <Typography
          styles={styles.preButtonText}
          weight='medium'
        >
          Ingresa con
        </Typography>
        <Pressable
          style={styles.buttonBox}
          onPress={() =>
            signIn({
              username: 'eamzea',
              onboarding: true,
            })
          }
        >
          <AntDesign
            name='google'
            size={24}
            color='black'
          />
          <Typography
            weight='bold'
            styles={styles.buttonText}
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

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light['main-primary'],
  },
  logo: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  buttonContainer: { gap: 20 },
  preButtonText: { textAlign: 'center', fontSize: 14 },
  buttonBox: {
    backgroundColor: 'white',
    height: 56,
    width: 312,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 16,
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default Login;
