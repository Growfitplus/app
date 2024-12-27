import { Link } from 'expo-router';
import { Text, View } from 'react-native';

const Height = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Height Screen</Text>
      <Link href='/weight'>Weight Screen</Link>
    </View>
  );
};

export default Height;
