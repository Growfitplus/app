import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';

const Terms = () => {
  return (
    <SafeAreaView>
      <AntDesign name="left" size={24} color="black" onPress={() => router.back()} />
      <Text>Terms</Text>
    </SafeAreaView>
  )
}

export default Terms
