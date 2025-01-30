import { Colors } from '@/constants/Colors';
import React, { FC, useEffect } from 'react';
import { Modal, StyleSheet, useWindowDimensions, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

interface BottomSheetProps {
  children: JSX.Element | JSX.Element[];
  isVisible: boolean;
  closeSheet: () => void;
}

const BottomSheet: FC<BottomSheetProps> = ({ children, isVisible, closeSheet }) => {
  const { height: screenHeight, width: screenWidth } = useWindowDimensions();
  const MAX_TRANSLATE_Y = 0;
  const MIN_TRANSLATE_Y = screenHeight * 0.05;
  const translateY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });

  useEffect(() => {
    if (isVisible) {
      scrollTo(0);
    }
  }, [isVisible]);

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate(e => {
      translateY.value = e.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
      // Up -> 0
      // Down -> 20
      const movement = translateY.value;

      if (movement > MIN_TRANSLATE_Y) {
        translateY.value = withSpring(screenHeight);
        closeSheet();
      }
      if (movement < MIN_TRANSLATE_Y) {
        translateY.value = withSpring(MAX_TRANSLATE_Y);
      }
    });

  const scrollTo = (destination: number) => {
    'worklet';
    translateY.value = withSpring(destination, { damping: 50 });
  };

  const reanimatedBottomStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={isVisible}
    >
      <View
        style={{
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <GestureDetector gesture={gesture}>
          <Animated.View style={[styles.main, reanimatedBottomStyle]}>
            <View
              style={{
                alignSelf: 'center',
                backgroundColor: '#000',
                borderRadius: 16,
                height: 4,
                width: screenWidth * 0.25,
              }}
            />
            {children}
          </Animated.View>
        </GestureDetector>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.light['white+'],
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    bottom: 0,
    paddingHorizontal: 25,
    paddingTop: 16,
    position: 'absolute',
    width: '100%',
  },
});

export default BottomSheet;
