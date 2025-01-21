import React, { useId } from 'react';
import { View } from 'react-native';
import Typography from '../Typography';
import { Colors } from '@/constants/Colors';
import { Days } from '@/constants/Goals';
import useToday from '@/hooks/useToday';
import { useUserContext } from '@/contexts/user/context';

const WeekDays = () => {
  const [
    {
      nutrition: { week },
    },
  ] = useUserContext();
  const { today } = useToday();

  const getDynamicColor = (index: number) => {
    if (week[index].succeeded) {
      return Colors.light['growfit+'];
    }

    if (week[index].exceeded) {
      return Colors.light.error;
    }

    if (today === index) {
      return Colors.light['dark+'];
    } else {
      return Colors.light.gray[3];
    }
  };

  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      {Days.map((day, index) => (
        <View
          style={{ alignItems: 'center', gap: 16 }}
          key={`${useId()}-${day}`}
        >
          <Typography
            weight='bold'
            styles={{
              color: today === index ? Colors.light['dark+'] : Colors.light.gray[3],
              fontSize: 12,
            }}
          >
            {day}
          </Typography>
          <View
            style={{
              backgroundColor: getDynamicColor(index),
              borderRadius: 8,
              height: 8,
              width: 8,
            }}
          ></View>
        </View>
      ))}
    </View>
  );
};

export default WeekDays;
