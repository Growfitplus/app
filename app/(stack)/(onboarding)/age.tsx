import { useState } from 'react';
import { router } from 'expo-router';
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
import * as SecureStore from 'expo-secure-store';

import { Colors } from '@/constants/Colors';
import Typography from '@/components/Typography';
import { Fonts } from '@/constants/Fonts';
import { useUserContext } from '@/contexts/user/context';
import { finishOnboarding, setAge } from '@/contexts/user/actions';
import { useStorageContext } from '@/contexts/storage/context';
import { finishStorage, settingStorage } from '@/contexts/storage/actions';
import Container from '@/components/Container';
import { heightPercentage } from '@/utils/keyboardHeight';
import useStorage from '@/hooks/useStorage';

const Age = () => {
  const [user, userDispatch] = useUserContext();
  const [, storageDispatch] = useStorageContext();
  const [age, updateAge] = useState(user.data.age);
  const [keyboardActive, setKeyboardActive] = useState(false);
  const { height: heightScreen } = useWindowDimensions();
  const { updateStorage } = useStorage();

  const handleOnboarding = async () => {
    userDispatch(setAge(Number(age)));
    userDispatch(finishOnboarding());

    await updateStorage({
      ...user,
      onboardingFinished: true,
      data: { ...user.data, age: Number(age) },
    });

    router.push('/(stack)/(tabs)/home');
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
              Edad
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
              value={age.toString()}
              onChangeText={text => updateAge(Number(text))}
              onFocus={() => setKeyboardActive(true)}
              onBlur={() => setKeyboardActive(false)}
              inputMode='decimal'
              keyboardType={Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'decimal-pad'}
            />
            <Typography styles={styles.years}>Años</Typography>
          </View>
          <View style={styles.continueContainer}>
            <Pressable
              style={{
                ...styles.continueButton,
                backgroundColor:
                  age === 0 ? Colors.light.button.disabled : Colors.light['main-primary'],
              }}
              onPress={handleOnboarding}
              disabled={age === 0}
            >
              <Typography
                weight='bold'
                styles={{
                  color: age === 0 ? Colors.light.text.disabled : Colors.light.text.emphasis,
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
  main: {
    backgroundColor: Colors.light['screen-bg'],
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 32,
    paddingBottom: 48,
  },
  valueContainer: {
    alignItems: 'center',
    gap: 12,
    justifyContent: 'center',
  },
  value: {
    fontFamily: Fonts.RobotoRegular,
    fontSize: 72,
    color: Colors.light.text.emphasis,
  },
  years: {
    fontSize: 16,
  },
  continueContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueButton: {
    alignItems: 'center',
    borderRadius: 16,
    justifyContent: 'center',
    padding: 16,
    width: '100%',
  },
});

export default Age;
