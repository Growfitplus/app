import { useUserContext } from '@/contexts/user/context';
import { IMC_LEVELS } from '@/contexts/user/types';
import React from 'react';
import { View } from 'react-native';

const levels = [
  { color: '60F889', level: IMC_LEVELS.LOW_WEIGHT },
  { color: '7BF579' },
  { color: '96F369' },
  { color: 'B2F158', level: IMC_LEVELS.NORMAL_WEIGHT },
  { color: 'CEEE48' },
  { color: 'EAEC37' },
  { color: 'FFE42B', level: IMC_LEVELS.OVERWEIGHT },
  { color: 'FFC92F' },
  { color: 'FFAE33' },
  { color: 'FF9337', level: IMC_LEVELS.LOW_OBESITY },
  { color: 'FF783B' },
  { color: 'FF5E3F' },
  { color: 'FF4243', level: IMC_LEVELS.MEDIUM_OBESITY },
  { color: 'FF054D' },
  { color: 'FF0A4C', level: IMC_LEVELS.MORBID_OBESITY },
];

const Bar = () => {
  const [
    {
      nutrition: { imcLevel },
    },
  ] = useUserContext();

  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        gap: 2,
        height: 56,
      }}
    >
      {levels.map(({ color, level }) => (
        <View
          style={{
            backgroundColor: `#${color}`,
            borderRadius: 8,
            height: level === imcLevel ? 48 : 18,
            width: 16,
          }}
          key={color}
        />
      ))}
    </View>
  );
};

export default Bar;
