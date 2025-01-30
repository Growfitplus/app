import React from 'react';
import { View } from 'react-native';
import { CameraIcon } from '../Icons';
import { Colors } from '@/constants/Colors';

const ProgressTab: React.FC<{ focused: boolean }> = ({ focused }) => (
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
    <CameraIcon
      size={24}
      color={Colors.light['dark+']}
    />
  </View>
);

export default ProgressTab;
