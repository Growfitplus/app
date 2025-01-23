import React from 'react';
import { View } from 'react-native';

import { useUserContext } from '@/contexts/user/context';

import { Colors } from '@/constants/Colors';
import { CaloriesGoal, CaloriesWidth } from '@/constants/Goals';

import useToday from '@/hooks/useToday';

const CaloriesProgress = () => {
  const [
    {
      nutrition: { week },
    },
  ] = useUserContext();
  const { today } = useToday();
  const { calories } = week?.[today] || { calories: 0 };
  const caloriesPercentage = Math.floor((calories / CaloriesGoal) * 100);

  const getCaloriesPercentage = () => CaloriesWidth * (caloriesPercentage / 100);

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
          backgroundColor: calories <= CaloriesGoal ? Colors.light['growfit+'] : Colors.light.error,
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
