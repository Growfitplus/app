import React from 'react';
import { View } from 'react-native';

import { useUserContext } from '@/contexts/user/context';

import { Colors } from '@/constants/Colors';
import { DefaultCaloriesGoal, CaloriesWidth, DefaultDoubleCalories } from '@/constants/Goals';

import useToday from '@/hooks/useToday';

const CaloriesProgress = () => {
  const [
    {
      nutrition: { maintainWeight, week },
    },
  ] = useUserContext();
  const { today } = useToday();
  const { calories } = week?.[today] || { calories: 0 };
  const caloriesGoal = maintainWeight ? maintainWeight : DefaultCaloriesGoal;
  const caloriesGoalPercentage = calories / caloriesGoal;
  const caloriesPercentage = Math.floor(caloriesGoalPercentage * 100);
  const exceededCaloriesPercentage = Math.floor((caloriesGoalPercentage - 1) * 100);
  const doubleCalories = maintainWeight ? maintainWeight * 2 : DefaultDoubleCalories;

  const getCaloriesWidth = () =>
    CaloriesWidth * ((caloriesPercentage < 1 ? 1 : caloriesPercentage) / 100);

  const getExceededCaloriesWidth = () =>
    calories < doubleCalories
      ? CaloriesWidth * ((exceededCaloriesPercentage < 1 ? 1 : exceededCaloriesPercentage) / 100)
      : CaloriesWidth;

  const getCaloriesProgress = () => {
    if (calories === 0) {
      return 0;
    }
    return calories > caloriesGoal ? getExceededCaloriesWidth() : getCaloriesWidth();
  };

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
          backgroundColor: calories <= caloriesGoal ? Colors.light['growfit+'] : Colors.light.error,
          borderRadius: 8,
          height: 6,
          width: getCaloriesProgress(),
        }}
      />
      <View
        style={{
          backgroundColor: Colors.light.line,
          borderRadius: 8,
          height: 6,
          width:
            CaloriesWidth -
            (calories <= caloriesGoal ? getCaloriesWidth() : getExceededCaloriesWidth()),
        }}
      />
    </View>
  );
};

export default CaloriesProgress;
