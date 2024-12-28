import { Colors } from '@/constants/Colors';
import { Link, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Onboarding = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={styles.main}>
      <Text>Onboarding Screen</Text>
      <Link href='/height'>Height Screen</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light['screen-bg'],
  },
});

export default Onboarding;
