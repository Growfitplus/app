import React from 'react';
import { View } from 'react-native';
import Home from '../SVG/Home';

const HomeTab: React.FC<{ focused: boolean }> = ({ focused }) => {
  return (
    <View
      style={{
        backgroundColor: focused ? '#00FFC2' : 'none',
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 14,
      }}
    >
      <Home />
    </View>
  );
};

export default HomeTab;
