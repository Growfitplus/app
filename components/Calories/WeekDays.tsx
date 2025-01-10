import React from 'react';
import { View } from 'react-native';
import Typography from '../Typography';
import { Colors } from '@/constants/Colors';

const WeekDays = () => {
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const today = new Date().getDay() - 1;

  console.log({ today });

  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      {days.map((day, index) => (
        <View style={{ alignItems: 'center', gap: 16 }}>
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
              backgroundColor: today === index ? Colors.light['dark+'] : Colors.light.gray[3],
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
