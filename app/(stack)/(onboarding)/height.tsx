import { Colors } from '@/constants/Colors';
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const Height = () => {
  return (
    <View style={styles.main}>
      <Text>Height Screen</Text>
      <Link href='/weight'>Weight Screen</Link>
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

export default Height;
