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
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default Progress;
