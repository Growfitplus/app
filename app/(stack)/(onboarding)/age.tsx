import { router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

import { useSession } from '@/contexts/session';
import { Colors } from '@/constants/Colors';

const Age = () => {
  const { finishOnboarding, session } = useSession();

  const handleOnboarding = () => {
    if (session) {
      finishOnboarding(session.username);
      router.replace('/(stack)/(tabs)/home');
    }
  };

  return (
    <View style={styles.main}>
      <Text>Age Screen</Text>
      <Button
        title='Finish Onboarding'
        onPress={handleOnboarding}
      />
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

export default Age;
