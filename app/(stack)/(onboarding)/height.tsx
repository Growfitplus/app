import { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import { router } from 'expo-router';

import { Colors } from '@/constants/Colors';
import Typography from '@/components/Typography';
import { Fonts } from '@/constants/Fonts';
import { useUserContext } from '@/contexts/user/context';
import { setHeight } from '@/contexts/user/actions';
import Container from '@/components/Container';
import { heightPercentage } from '@/utils/keyboardHeight';

const Height = () => {
  const [user, dispatch] = useUserContext();
  const [height, updateHeight] = useState(user.data.height);
  const [keyboardActive, setKeyboardActive] = useState(false);
  const { height: heightScreen } = useWindowDimensions();

  const handleContinue = () => {
    dispatch(setHeight(Number(height)));

    router.push('/(stack)/(onboarding)/weight');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.main}
    >
      <Container>
        <Pressable
          onPress={Keyboard.dismiss}
          style={styles.container}
        >
          <View>
            <Typography
              weight='bold'
              styles={{ fontSize: 24 }}
            >
              Estatura
            </Typography>
          </View>
          <View
            style={[
              styles.valueContainer,
              { height: keyboardActive ? heightPercentage(heightScreen) : '90%' },
            ]}
          >
            <TextInput
              style={styles.value}
              value={height.toString()}
              onChangeText={text => updateHeight(Number(text))}
              onFocus={() => setKeyboardActive(true)}
              onBlur={() => setKeyboardActive(false)}
              inputMode='decimal'
              keyboardType={Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'decimal-pad'}
            />
            <Typography styles={styles.cms}>cms</Typography>
          </View>
          <View style={styles.continueContainer}>
            <Pressable
              style={{
                ...styles.continueButton,
                backgroundColor:
                  height === 0 ? Colors.light.button.disabled : Colors.light['main-primary'],
              }}
              onPress={handleContinue}
              disabled={height === 0}
            >
              <Typography
                weight='bold'
                styles={{
                  color: height === 0 ? Colors.light.text.disabled : Colors.light.text.emphasis,
                  fontSize: 16,
                }}
              >
                Continuar
              </Typography>
            </Pressable>
          </View>
        </Pressable>
      </Container>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  cms: {
    fontSize: 16,
  },
  container: {
    flex: 1,
    paddingBottom: 48,
    paddingTop: 32,
  },
  continueButton: {
    alignItems: 'center',
    borderRadius: 16,
    justifyContent: 'center',
    padding: 16,
    width: '100%',
  },
  continueContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  main: {
    backgroundColor: Colors.light['screen-bg'],
    flex: 1,
  },
  value: {
    color: Colors.light.text.emphasis,
    fontFamily: Fonts.RobotoRegular,
    fontSize: 72,
  },
  valueContainer: {
    alignItems: 'center',
    flex: 1,
    gap: 12,
    justifyContent: 'center',
  },
});

export default Height;
