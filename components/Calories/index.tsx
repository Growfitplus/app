import { Colors } from '@/constants/Colors';
import React, { useEffect } from 'react';
import { Platform, TextInput, View } from 'react-native';
import WeekDays from './WeekDays';
import { FireSVG } from '../SVG';
import Typography from '../Typography';
import CaloriesProgress from './CaloriesProgress';
import { Fonts } from '../../constants/Fonts';
import { useUserContext } from '@/contexts/user/context';
import { setCalories } from '@/contexts/user/actions';
import useStorage from '@/hooks/useStorage';

const Calories = () => {
  const [user, userDispatch] = useUserContext();
  const { updateStorage } = useStorage();
  const {
    data: { calories = 0 },
  } = user;

  useEffect(() => {
    void updateStorage({ ...user });
  }, [calories]);

  const handleCalories = (value: string) => {
    userDispatch(setCalories(Number(value)));
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
