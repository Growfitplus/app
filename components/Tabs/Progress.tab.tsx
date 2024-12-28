import React from 'react';
import { View } from 'react-native';
import { CameraIcon } from '../Icons';

const ProgressTab: React.FC<{ focused: boolean }> = ({ focused }) => (
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
    <CameraIcon />
  </View>
);

export default ProgressTab;
