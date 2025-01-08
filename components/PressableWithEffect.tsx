import React from 'react';
import { Pressable, ViewStyle } from 'react-native';

interface PressableWithEffectProps {
  children: React.ReactNode;
  isEnabled?: boolean;
  customStyles?: ViewStyle;
  onPressAction?: () => void;
}

const PressableWithEffect: React.FC<PressableWithEffectProps> = ({
  children,
  customStyles,
  isEnabled = true,
  onPressAction,
}) => {
  return (
    <Pressable
      style={({ pressed }) => ({ ...customStyles, opacity: pressed ? 0.5 : 1 })}
      onPress={onPressAction}
      disabled={!isEnabled}
    >
      {children}
    </Pressable>
  );
};

export default PressableWithEffect;
