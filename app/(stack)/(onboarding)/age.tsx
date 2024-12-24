import { useSession } from '@/contexts/session';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';

const Age = () => {
  const { finishOnboarding, session } = useSession()

  const handleOnboarding = () => {
    if (session) {
      finishOnboarding(session.username)
      router.replace("/(stack)/(tabs)/home")
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <AntDesign name="left" size={24} color="black" onPress={() => router.back()} />
      <Text>Age Screen</Text>
      <Button title='Finish Onboarding' onPress={handleOnboarding} />
    </View>
  );
}

export default Age
