import React from 'react';
import { View } from 'react-native';
import { ClockSVG } from '../SVG';

const TrainingTab: React.FC<{ focused: boolean }> = ({ focused }) => (
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
    <ClockSVG />
  </View>
);

export default TrainingTab;
