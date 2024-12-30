import React from 'react';
import { View } from 'react-native';
import { HomeSVG } from '../SVG';

const HomeTab: React.FC<{ focused: boolean }> = ({ focused }) => {
  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: focused ? '#00FFC2' : 'none',
        borderRadius: 14,
        height: 40,
        justifyContent: 'center',
        width: 40,
      }}
    >
      <HomeSVG />
    </View>
  );
};

export default HomeTab;
