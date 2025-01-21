import React, { useEffect } from 'react';
import { Platform, TextInput, View } from 'react-native';

import { useUserContext } from '@/contexts/user/context';
import { setCalories } from '@/contexts/user/actions';

import useStorage from '@/hooks/useStorage';
import useToday from '@/hooks/useToday';

import { Colors } from '@/constants/Colors';
import { CaloriesGoal } from '@/constants/Goals';
import { Fonts } from '@/constants/Fonts';

import CaloriesProgress from './CaloriesProgress';
import WeekDays from './WeekDays';
import { FireSVG } from '../SVG';
import Typography from '../Typography';

const Calories = () => {
  const [user, userDispatch] = useUserContext();
  const { updateStorage } = useStorage();
  const {
    nutrition: { week },
  } = user;
  const { today } = useToday();
  const { calories } = week?.[today] || { calories: 0 };
  const hasExceeded = calories > CaloriesGoal;

  useEffect(() => {
    void updateStorage({ ...user });
  }, [week]);

  const handleCalories = (value: string) => {
    const updatedWeek = [...week];

    updatedWeek[today].calories = Number(value);
    updatedWeek[today].exceeded = Number(value) > CaloriesGoal;
    updatedWeek[today].succeeded = Number(value) === CaloriesGoal;

    userDispatch(setCalories(updatedWeek));
  };

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
      {calories < CaloriesGoal && (
        <Typography
          styles={{
            color: Colors.light.gray[2],
            fontSize: 14,
          }}
        >
          Consume máximo 1800 Kcal
        </Typography>
      )}
      {hasExceeded && (
        <Typography
          styles={{
            color: Colors.light.gray[2],
            fontSize: 14,
          }}
        >
          {`Te excediste en ${calories - CaloriesGoal} Kcal`}
        </Typography>
      )}
    </View>
  );
};

export default Calories;
