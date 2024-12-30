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
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default Training;
