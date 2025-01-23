import React from 'react';
import { View } from 'react-native';

import { Colors } from '@/constants/Colors';

import Walk from '../SVG/Walk';
import Typography from '../Typography';
import { CheckIcon } from '../Icons';
import PressableWithEffect from '../PressableWithEffect';
import { useUserContext } from '@/contexts/user/context';
import { resetWeek } from '@/utils/resetWeek';
import useToday from '@/hooks/useToday';
import { setWalking } from '@/contexts/user/actions';

const Walking = () => {
  const [
    {
      nutrition: { week },
    },
    userDisptach,
  ] = useUserContext();
  const { today } = useToday();

  const handleWalking = () => {
    const updatedWeek = week.length === 0 ? resetWeek() : [...week];

    updatedWeek[today].walking = true;

    userDisptach(setWalking(updatedWeek));
  };

  return (
    <PressableWithEffect
      customStyles={{
        backgroundColor: Colors.light['white+'],
        borderRadius: 24,
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: 36,
      }}
      onPressAction={handleWalking}
    >
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          gap: 4,
        }}
      >
        <Walk />
        <Typography
          weight='bold'
          customStyles={{ fontSize: 12 }}
        >
          Caminar
        </Typography>
      </View>
      <Typography customStyles={{ textAlign: 'center' }}>
        {week[today].walking ? '100' : '0'}% de tu meta
      </Typography>
      <Typography
        weight='bold'
        customStyles={{
          color: Colors.light.gray[2],
          fontSize: 32,
          marginTop: 16,
          textAlign: 'center',
        }}
      >
        30
      </Typography>
      <Typography
        customStyles={{
          color: Colors.light.gray[3],
          fontSize: 12,
          marginBottom: 16,
          textAlign: 'center',
        }}
      >
        Minutos
      </Typography>
      <View style={{ alignItems: 'center' }}>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: week[today].walking ? Colors.light['growfit+'] : 'transparent',
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
    </PressableWithEffect>
  );
};

export default Walking;
