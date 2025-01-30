import React from 'react';
import { Platform, TextInput, View } from 'react-native';

import { useUserContext } from '@/contexts/user/context';
import { setCalories } from '@/contexts/user/actions';

import useToday from '@/hooks/useToday';

import { Colors } from '@/constants/Colors';
import { DefaultCaloriesGoal, MaxCalories } from '@/constants/Goals';
import { Fonts } from '@/constants/Fonts';

import { resetWeek } from '@/utils/resetWeek';

import CaloriesProgress from './CaloriesProgress';
import WeekDays from './WeekDays';
import { FireSVG } from '../SVG';
import Typography from '../Typography';
import NightTime from './NightTime';

const Calories = () => {
  const [
    {
      nutrition: { week, maintainWeight },
    },
    userDispatch,
  ] = useUserContext();
  const { today, hours } = useToday();
  const { calories } = week?.[today] || { calories: 0 };
  const caloriesGoal = maintainWeight ? maintainWeight : DefaultCaloriesGoal;
  const hasExceeded = calories > caloriesGoal;
  const showNight = hours >= 23 && hours < 7;

  const handleCalories = (value: string) => {
    if (Number(value) <= MaxCalories) {
      const updatedWeek = week.length === 0 ? resetWeek() : [...week];

      updatedWeek[today].calories = Number(value);
      updatedWeek[today].exceeded = Number(value) > caloriesGoal;
      updatedWeek[today].succeeded = Number(value) === caloriesGoal;

      userDispatch(setCalories(updatedWeek));
    }
  };

  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: Colors.light['white+'],
        borderRadius: 24,
        paddingHorizontal: 42,
        paddingVertical: 36,
        position: 'relative',
        width: '100%',
      }}
    >
      {showNight && <NightTime />}
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
          customStyles={{ fontSize: 24 }}
        >
          Calorías
        </Typography>
      </View>
      <TextInput
        value={calories.toString()}
        onChangeText={handleCalories}
        inputMode='numeric'
        keyboardType={Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'decimal-pad'}
        placeholder='0'
        style={{
          fontFamily: Fonts.RobotoMedium,
          fontSize: 56,
          marginBottom: 24,
          textAlign: 'center',
        }}
      />
      <CaloriesProgress />
      {calories < caloriesGoal && (
        <Typography
          customStyles={{
            color: Colors.light.gray[2],
            fontSize: 14,
          }}
        >
          Consume máximo {maintainWeight.toString()} Kcal
        </Typography>
      )}
      {hasExceeded && (
        <Typography
          customStyles={{
            color: Colors.light.gray[2],
            fontSize: 14,
          }}
        >
          {`Te excediste en ${calories - caloriesGoal} Kcal`}
        </Typography>
      )}
    </View>
  );
};

export default Calories;
