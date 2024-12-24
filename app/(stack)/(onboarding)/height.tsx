import { Link, router } from 'expo-router';
import { Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';


const Height = () =>  {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <AntDesign name="left" size={24} color="black" onPress={() => router.back()} />
      <Text>Height Screen</Text>
      <Link href="/weight">Weight Screen</Link>
    </View>
  );
}

export default Height
