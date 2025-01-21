import { Fonts } from '@/constants/Fonts';
import React from 'react';
import { Text, TextStyle } from 'react-native';

interface TypographyProps {
  children: string | string[] | number;
  weight?: 'bold' | 'medium' | 'regular';
  styles?: TextStyle;
}

const WeightTypes = {
  bold: Fonts.RobotoBold,
  medium: Fonts.RobotoMedium,
  regular: Fonts.RobotoRegular,
};

const Typography: React.FC<TypographyProps> = ({ children, weight = 'regular', styles }) => {
  return <Text style={{ fontFamily: WeightTypes[weight], ...styles }}>{children}</Text>;
};

export default Typography;
