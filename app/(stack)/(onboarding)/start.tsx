import { Link, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import Typography from '@/components/Typography';
import { Colors } from '@/constants/Colors';

const Onboarding = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={styles.main}>
      <Typography
        weight='bold'
        styles={{ fontSize: 24 }}
      >
        ¿Cuál es tu sexo?
      </Typography>
      <Link href='/height'>Height Screen</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    backgroundColor: Colors.light['screen-bg'],
    flex: 1,
    justifyContent: 'center',
  },
});

export default Onboarding;
