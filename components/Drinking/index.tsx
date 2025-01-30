import React from 'react';
import { View } from 'react-native';

import { useUserContext } from '@/contexts/user/context';
import { setLiters } from '@/contexts/user/actions';
import { useStorageContext } from '@/contexts/storage/context';

import { Colors } from '@/constants/Colors';
import { DrinkingGoal } from '@/constants/Goals';

import useToday from '@/hooks/useToday';
import { resetWeek } from '@/utils/resetWeek';

import Typography from '../Typography';
import { CheckIcon } from '../Icons';
import Drop from '../SVG/Drop';
import PressableWithEffect from '../PressableWithEffect';
import Add from '../SVG/Add';
import Subtract from '../SVG/Subtract';

const Drinking = () => {
  const [
    {
      nutrition: { week, litersGoal },
    },
    userDispatch,
  ] = useUserContext();
  const [{ isLoading }] = useStorageContext();
  const { today } = useToday();

  const { liters = 0 } = week[today];
  const goal = litersGoal ? litersGoal : DrinkingGoal;
  const percentage = liters < 3 ? Math.floor((liters / goal) * 100) : 100;

  const handleDrinking = (value: number) => {
    if (value >= 0 && value <= 6) {
      const updatedWeek = week.length === 0 ? resetWeek() : [...week];

      updatedWeek[today].liters = value;

      userDispatch(setLiters(updatedWeek));
    }
  };

  return (
    <View
      style={{
        backgroundColor: Colors.light['white+'],
        borderRadius: 24,
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: 36,
      }}
    >
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          gap: 4,
        }}
      >
        <Drop />
        <Typography
          weight='bold'
          customStyles={{ fontSize: 12 }}
        >
          Agua
        </Typography>
      </View>
      <Typography customStyles={{ textAlign: 'center' }}>
        {percentage.toString()}% de tu meta
      </Typography>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          gap: 16,
          justifyContent: 'center',
          marginTop: 16,
          width: '100%',
        }}
      >
        <PressableWithEffect
          onPressAction={() => handleDrinking(liters - 1)}
          isEnabled={isLoading ? false : liters !== 0}
          handleDisableStyles={liters === 0}
        >
          <Subtract />
        </PressableWithEffect>
        <Typography
          weight='bold'
          customStyles={{
            color: liters > 0 ? Colors.light['dark+'] : Colors.light.gray[2],
            fontSize: 32,
            textAlign: 'center',
          }}
        >
          {liters}
        </Typography>
        <PressableWithEffect
          onPressAction={() => handleDrinking(liters + 1)}
          isEnabled={isLoading ? false : liters < 6}
          handleDisableStyles={liters === 6}
        >
          <Add />
        </PressableWithEffect>
      </View>
      <Typography
        customStyles={{
          color: Colors.light.gray[3],
          fontSize: 12,
          marginBottom: 16,
          textAlign: 'center',
        }}
      >
        litros
      </Typography>
      <View style={{ alignItems: 'center' }}>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: liters >= 2 ? Colors.light['growfit+'] : 'transparent',
            borderRadius: 20,
            height: 20,
            justifyContent: 'center',
            width: 20,
          }}
        >
          <CheckIcon
            size={16}
            color={Colors.light.gray[1]}
          />
        </View>
      </View>
    </View>
  );
};

export default Drinking;
