import React from 'react';
import { ActivityIndicator, Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import { useEffect } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

import { LogoLogIn } from '@/components/SVG/Logo';
import { ArrowNextIcon } from '@/components/Icons';
import { Colors } from '@/constants/Colors';
import Typography from '@/components/Typography';
import { useUserContext } from '@/contexts/user/context';
import { loadData, logIn, setUsername } from '@/contexts/user/actions';
import { useStorageContext } from '@/contexts/storage/context';
import { finishStorage, gettingStorage, settingStorage } from '@/contexts/storage/actions';
import * as SecureStore from 'expo-secure-store';

const Login = () => {
  const [user, userDispatch] = useUserContext();
  const [{ isLoading }, storageDispatch] = useStorageContext();

  useEffect(() => {
    loadStorageData();
  }, []);

  const loadStorageData = async () => {
    storageDispatch(gettingStorage());

    try {
      const store = await SecureStore.getItemAsync('session');

      if (store) {
        const data = JSON.parse(store);

        if (data.hasSession) {
          userDispatch(logIn(data));

          await SecureStore.setItemAsync('session', JSON.stringify({ ...data, hasSession: true }));

          if (!data.onboardingFinished) {
            router.push('/(stack)/(onboarding)/start');
          } else {
            router.push('/(stack)/(tabs)/home');
          }
        } else {
          userDispatch(loadData(data));
        }
      }
    } catch (e) {
      console.error('Secure Store is unavailable:', e);
    } finally {
      storageDispatch(finishStorage());
    }
  };

  const signIn = async () => {
    userDispatch(setUsername('eamzea'));

    try {
      storageDispatch(settingStorage());

      await SecureStore.setItemAsync(
        'session',
        JSON.stringify({
          ...user,
          username: 'eamzea',
          hasSession: true,
        }),
      );
    } catch (e) {
      console.error('Secure Store is unavailable:', e);
    } finally {
      storageDispatch(finishStorage());
    }

    if (!user.onboardingFinished) {
      router.push('/(stack)/(onboarding)/start');
    } else {
      router.push('/(stack)/(tabs)/home');
    }
  };

  return isLoading ? (
    <View style={styles.main}>
      <ActivityIndicator
        size='large'
        color='black'
      />
    </View>
  ) : (
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
          onPress={signIn}
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
    backgroundColor: Colors.light.white,
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
