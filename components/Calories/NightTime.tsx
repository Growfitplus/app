import React from 'react';
import { View } from 'react-native';
import { MoonSVG } from '../SVG';
import Typography from '../Typography';
import { Colors } from '@/constants/Colors';

const NightTime = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: Colors.light['dark+'],
        borderRadius: 50,
        flexDirection: 'row',
        gap: 16,
        padding: 12,
        position: 'absolute',
        top: -16,
      }}
    >
      <MoonSVG />
      <Typography
        customStyles={{
          color: Colors.light['white+'],
          fontSize: 10,
        }}
        weight='bold'
      >
        Hora de dormir 23:00
      </Typography>
    </View>
  );
};

export default NightTime;
