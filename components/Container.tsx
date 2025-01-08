import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

interface ContainerProps {
  children: React.ReactNode;
  customStyles?: ViewStyle
}

const Container: React.FC<ContainerProps> = ({ children, customStyles }) => {
  return <View style={{...styles.container, ...customStyles}}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 28
  }
})

export default Container;
