import { Link, router } from 'expo-router';
import { Text, View } from 'react-native';

const Weight = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Weight Screen</Text>
      <Link href='/age'>age Screen</Link>
    </View>
  );
};

export default Weight;
