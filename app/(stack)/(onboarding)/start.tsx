import { Link, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Text, View } from 'react-native';

const Onboarding = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Onboarding Screen</Text>
      <Link href="/height">Height Screen</Link>
    </View>
  );
}

export default Onboarding
