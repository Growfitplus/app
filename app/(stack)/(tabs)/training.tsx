import { StyleSheet, Text, View } from 'react-native';

const Training = () => {
  return (
    <View style={styles.main}>
      <Text>Training Screen</Text>
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

export default Training;
