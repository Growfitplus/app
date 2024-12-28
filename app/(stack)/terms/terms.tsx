import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const Terms = () => {

  return (
    <SafeAreaView style={styles.main}>
      <Text>Terms</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Terms;
