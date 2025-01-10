import { Colors } from '@/constants/Colors';
import React from 'react';
import { View } from 'react-native';

const CaloriesProgress = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        gap: 2,
        marginBottom: 24,
      }}
    >
      <View
        style={{
          backgroundColor: Colors.light['growfit+'],
          borderRadius: 8,
          height: 6,
          width: 8,
        }}
      />
      <View
        style={{
          backgroundColor: Colors.light.line,
          borderRadius: 8,
          height: 6,
          width: 130,
        }}
      />
    </View>
  );
};

export default CaloriesProgress;
