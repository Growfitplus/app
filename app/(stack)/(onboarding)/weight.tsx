import { Colors } from '@/constants/Colors';
import { Link, router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const Weight = () => {
  return (
    <View style={styles.main}>
      <Text>Weight Screen</Text>
      <Link href='/age'>age Screen</Link>
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

export default Weight;
