import { Colors } from '@/constants/Colors';
import React from 'react';
import { View } from 'react-native';
import WeekDays from './WeekDays';
import { FireSVG } from '../SVG';
import Typography from '../Typography';
import CaloriesProgress from './CaloriesProgress';

const Calories = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: Colors.light['white+'],
        borderRadius: 24,
        paddingHorizontal: 42,
        paddingVertical: 36,
        width: '100%',
      }}
    >
      <WeekDays />
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          gap: 16,
          justifyContent: 'center',
          marginVertical: 32,
          width: '100%',
        }}
      >
        <FireSVG />
        <Typography
          weight='bold'
          styles={{ fontSize: 24 }}
        >
          Calorías
        </Typography>
      </View>
      <Typography
        weight='medium'
        styles={{ fontSize: 56, marginBottom: 24, textAlign: 'center' }}
      >
        0
      </Typography>
      <CaloriesProgress />
      <Typography
        styles={{
          color: Colors.light.gray[2],
          fontSize: 14,
        }}
      >
        Consume máximo 1800 Kcal
      </Typography>
    </View>
  );
};

export default Calories;
