import React from 'react'
import { Pressable, SafeAreaView, Text, View } from 'react-native';
import { useSession } from '../contexts/session';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { LogoLogIn } from '@/components/svg/Logo';
import AntDesign from '@expo/vector-icons/AntDesign';

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

  }, [session])

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00FFC2'}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <LogoLogIn />
      </View>
      <View style={{gap: 20}}>
        <Text style={{textAlign: 'center'}}>
          Ingresa con
        </Text>
        <Pressable style={{ backgroundColor: 'white', height: 56, width: 312, alignItems: 'center', justifyContent: 'space-between', borderRadius: 16, flexDirection: 'row', paddingHorizontal: 16 }} onPress={() => signIn({
          username: 'eamzea',
          onboarding: true
        })}>
        <AntDesign name="google" size={24} color="black" />
          <Text style={{fontWeight: '700'}}>
            Google
          </Text>
          <AntDesign name="arrowright" size={24} color="black" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default Login
