import { useState } from 'react';
import { router } from 'expo-router';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { Colors } from '@/constants/Colors';
import Typography from '@/components/Typography';
import { Fonts } from '@/constants/Fonts';
import { useUserContext } from '@/contexts/user/context';
import { finishOnboarding, setAge } from '@/contexts/user/actions';
import { useStorageContext } from '@/contexts/storage/context';
import { finishStorage, settingStorage } from '@/contexts/storage/actions';
import * as SecureStore from 'expo-secure-store';

const Age = () => {
  const [user, userDispatch] = useUserContext();
  const [, storageDispatch] = useStorageContext();
  const [age, updateAge] = useState(user.data.age);
  const [keyboardActive, setKeyboardActive] = useState(false);

  const handleOnboarding = async () => {
    userDispatch(setAge(Number(age)));
    userDispatch(finishOnboarding());

    try {
      storageDispatch(settingStorage());

      await SecureStore.setItemAsync(
        'session',
        JSON.stringify({
          ...user,
          data: { ...user.data, age: Number(age) },
          onboardingFinished: true,
        }),
      );
    } catch (e) {
      console.error('Secure Store is unavailable:', e);
    } finally {
      storageDispatch(finishStorage());
    }

    router.push('/(stack)/(tabs)/home');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.main}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View>
            <Typography
              weight='bold'
              styles={{ fontSize: 24 }}
            >
              Edad
            </Typography>
          </View>
          <View style={[styles.valueContainer, { height: keyboardActive ? '70%' : '90%' }]}>
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
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
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
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 22,
    paddingVertical: 32,
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
  years: {
    fontSize: 16,
  },
});

export default Age;
