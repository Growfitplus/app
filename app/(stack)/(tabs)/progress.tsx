import { StyleSheet, Text, View } from 'react-native';

const Progress = () => {
  return (
    <View style={styles.main}>
      <Text>Progress Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Progress;
