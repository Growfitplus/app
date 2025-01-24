import React from 'react';
import { View } from 'react-native';

import { Colors } from '@/constants/Colors';
import Typography from '../Typography';
import { CheckIcon } from '../Icons';
import Drop from '../SVG/Drop';
import PressableWithEffect from '../PressableWithEffect';
import Add from '../SVG/Add';
import Subtract from '../SVG/Subtract';
import { useUserContext } from '@/contexts/user/context';
import { setLiters } from '@/contexts/user/actions';
import { useStorageContext } from '@/contexts/storage/context';
import { DrinkingGoal } from '@/constants/Goals';
import useToday from '@/hooks/useToday';
import { resetWeek } from '@/utils/resetWeek';

const Drinking = () => {
  const [user, userDispatch] = useUserContext();
  const [{ isLoading }] = useStorageContext();
  const { today } = useToday();

  const {
    nutrition: { week },
  } = user;
  const { liters = 0 } = week[today];
  const percentage = liters < 3 ? Math.floor((liters / DrinkingGoal) * 100) : 100;

  const handleDrinking = (value: number) => {
    if (value >= 0) {
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
          isEnabled={!isLoading}
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
          isEnabled={!isLoading}
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
