import React from 'react';
import { View } from 'react-native';

const levels = [
  '60F889',
  '7BF579',
  '96F369',
  'B2F158',
  'CEEE48',
  'EAEC37',
  'FFE42B',
  'FFC92F',
  'FFAE33',
  'FF9337',
  'FF783B',
  'FF5E3F',
  'FF4243',
  'FF054D',
  'FF0A4C',
];

const Bar = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        gap: 2,
        height: 56,
      }}
    >
      {levels.map(color => (
        <View
          style={{ backgroundColor: `#${color}`, borderRadius: 8, height: 18, width: 16 }}
          key={color}
        />
      ))}
    </View>
  );
};

export default Bar;
