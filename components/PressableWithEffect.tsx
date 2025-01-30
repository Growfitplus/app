import React from 'react';
import { Pressable, ViewStyle } from 'react-native';

interface PressableWithEffectProps {
  children: React.ReactNode;
  isEnabled?: boolean;
  handleDisableStyles?: boolean;
  customStyles?: ViewStyle;
  onPressAction?: () => void;
}

const PressableWithEffect: React.FC<PressableWithEffectProps> = ({
  children,
  customStyles,
  isEnabled = true,
  handleDisableStyles,
  onPressAction,
}) => (
  <Pressable
    style={({ pressed }) => ({
      ...customStyles,
      opacity: !isEnabled && handleDisableStyles ? 0.5 : pressed ? 0.5 : 1,
    })}
    onPress={onPressAction}
    disabled={!isEnabled}
  >
    {children}
  </Pressable>
);

export default PressableWithEffect;
