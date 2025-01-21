import { Colors } from '@/constants/Colors';
import React from 'react';
import { View } from 'react-native';
import Walk from '../SVG/Walk';
import Typography from '../Typography';
import { CheckIcon } from '../Icons';

const Walking = () => {
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
        <Walk />
        <Typography
          weight='bold'
          styles={{ fontSize: 12 }}
        >
          Caminar
        </Typography>
      </View>
      <Typography styles={{ textAlign: 'center' }}>0% de tu meta</Typography>
      <Typography
        weight='bold'
        styles={{
          color: Colors.light.gray[2],
          fontSize: 32,
          marginTop: 16,
          textAlign: 'center',
        }}
      >
        30
      </Typography>
      <Typography
        styles={{
          color: Colors.light.gray[3],
          fontSize: 12,
          marginBottom: 16,
          textAlign: 'center',
        }}
      >
        Minutos
      </Typography>
      <View style={{ alignItems: 'center' }}>
        <CheckIcon
          size={16}
          color={Colors.light.gray[1]}
        />
      </View>
    </View>
  );
};

export default Walking;
