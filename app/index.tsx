import React, { useEffect } from 'react';
import { ActivityIndicator, Pressable, SafeAreaView, View } from 'react-native';
import { router } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import * as SecureStore from 'expo-secure-store';

import { ArrowNextIcon } from '@/components/Icons';
import { finishStorage, gettingStorage, settingStorage } from '@/contexts/storage/actions';
import { loadData, logIn, setUsername } from '@/contexts/user/actions';
import { LogInStyles } from '@/styles/logIn';
import { LogoLogIn } from '@/components/SVG/Logo';
import { useStorageContext } from '@/contexts/storage/context';
import { useUserContext } from '@/contexts/user/context';
import Typography from '@/components/Typography';
import { USER_STATE_TYPE } from '@/contexts/user/types';

const Login = () => {
  const [user, userDispatch] = useUserContext();
  const [{ isLoading }, storageDispatch] = useStorageContext();

  useEffect(() => {
    void loadStorageData();
  }, []);

  const loadStorageData = async () => {
    storageDispatch(gettingStorage());

    try {
      const store = await SecureStore.getItemAsync('session');

      if (store) {
        const data = JSON.parse(store) as USER_STATE_TYPE;

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
          hasSession: true,
          username: 'eamzea',
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
    <View style={LogInStyles.main}>
      <ActivityIndicator
        size='large'
        color='black'
      />
    </View>
  ) : (
    <SafeAreaView style={LogInStyles.main}>
      <View style={LogInStyles.logo}>
        <LogoLogIn />
      </View>
      <View
        style={{
          ...LogInStyles.buttonContainer,
          marginBottom: 16,
        }}
      >
        <Typography
          styles={LogInStyles.preButtonText}
          weight='medium'
        >
          Ingresa con
        </Typography>
        <Pressable
          style={LogInStyles.buttonBox}
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onPress={signIn}
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
