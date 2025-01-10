import { Colors } from '@/constants/Colors';
import { CaloriesGoal, CaloriesWidth } from '@/constants/Goals';
import { useUserContext } from '@/contexts/user/context';
import React from 'react';
import { View } from 'react-native';

const CaloriesProgress = () => {
  const [
    {
      data: { calories },
    },
  ] = useUserContext();
  const caloriesPercentage = Math.floor((calories / CaloriesGoal) * 100);

  const getCaloriesPercentage = () => CaloriesWidth * (caloriesPercentage / 100);

  console.log({
    calories,
    caloriesPercentage,
    width: CaloriesWidth * (caloriesPercentage / 100),
  });

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
          width: caloriesPercentage > 100 ? CaloriesWidth : getCaloriesPercentage(),
        }}
      />
      <View
        style={{
          backgroundColor: Colors.light.line,
          borderRadius: 8,
          height: 6,
          width: CaloriesWidth - getCaloriesPercentage(),
        }}
      />
    </View>
  );
};

export default CaloriesProgress;
