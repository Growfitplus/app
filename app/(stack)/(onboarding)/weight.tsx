import { Colors } from '@/constants/Colors';
import { Link } from 'expo-router';
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
    alignItems: 'center',
    backgroundColor: Colors.light['screen-bg'],
    flex: 1,
    justifyContent: 'center',
  },
});

export default Weight;
