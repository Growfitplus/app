import AntDesign from '@expo/vector-icons/AntDesign';
import { Link, router } from 'expo-router';
import { Text, View } from 'react-native';

const Weight = () =>  {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <AntDesign name="left" size={24} color="black" onPress={() => router.back()} />
      <Text>Weight Screen</Text>
      <Link href="/age">age Screen</Link>
    </View>
  );
}

export default Weight
