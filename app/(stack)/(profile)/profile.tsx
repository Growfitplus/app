import { Modal, Pressable, StyleSheet, useWindowDimensions, View } from 'react-native';

import { ChevronNextIcon, LogOutIcon } from '@/components/Icons';
import Typography from '@/components/Typography';
import { InfoSVG } from '@/components/SVG';
import { useUserContext } from '@/contexts/user/context';
import { logOut } from '@/contexts/user/actions';
import { Colors } from '@/constants/Colors';
import useStorage from '@/hooks/useStorage';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useEffect } from 'react';

const Profile: React.FC<{
  isVisible: boolean;
  handleAbout: () => void;
  closeSheet: () => void;
}> = ({ isVisible, handleAbout, closeSheet }) => {
  const [user, userDispatch] = useUserContext();
  const { updateStorage } = useStorage();
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  const MAX_TRANSLATE_Y = 0;
  const MIN_TRANSLATE_Y = 0;
  const translateY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });

  useEffect(() => {
    scrollTo(0);
  }, []);

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate(e => {
      translateY.value = e.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, -MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
      if (translateY.value > -MIN_TRANSLATE_Y) {
        translateY.value = withSpring(screenHeight);
      }
      if (translateY.value < -MIN_TRANSLATE_Y) {
        translateY.value = withSpring(-MAX_TRANSLATE_Y);
      }
      closeSheet();
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

  const handleExit = async () => {
    await updateStorage({ ...user, hasSession: false });

    userDispatch(logOut());
  };

  return (
    <Modal
      animationType='slide'
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
            <Pressable
              style={styles.pressable}
              onPress={handleAbout}
            >
              <View style={styles.termsContainer}>
                <InfoSVG
                  width={24}
                  height={24}
                />
                <Typography customStyles={styles.termsText}>Sobre Growfit+</Typography>
              </View>
              <ChevronNextIcon
                size={24}
                color='black'
              />
            </Pressable>
            <Pressable
              style={styles.pressable}
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onPress={handleExit}
            >
              <LogOutIcon
                size={24}
                color='#FF002E'
              />
              <Typography customStyles={styles.logOutText}>Cerrar Sesión</Typography>
            </Pressable>
          </Animated.View>
        </GestureDetector>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  logOutText: { color: '#FF002E', fontSize: 16 },
  main: {
    backgroundColor: Colors.light['white+'],
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    bottom: 0,
    gap: 38,
    height: '25%',
    paddingHorizontal: 25,
    paddingTop: 16,
    position: 'absolute',
    width: '100%',
  },
  pressable: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 24,
    height: 30,
  },
  termsContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    gap: 30,
  },
  termsText: { fontSize: 16 },
});

export default Profile;
