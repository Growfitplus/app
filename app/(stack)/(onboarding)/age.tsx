import { useState } from 'react';
import { router } from 'expo-router';
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, TextInput, View } from 'react-native';

import { Colors } from '@/constants/Colors';
import Typography from '@/components/Typography';
import { useUserContext } from '@/contexts/user/context';
import { finishOnboarding, setAge } from '@/contexts/user/actions';
import Container from '@/components/Container';
import useStorage from '@/hooks/useStorage';
import { OnboardingStyles } from '@/styles/onboarding/index';

const Age = () => {
  const [user, userDispatch] = useUserContext();
  const [age, updateAge] = useState(user.personal.age.toString());
  const { updateStorage } = useStorage();
  const isInvalidAge = Number(age) < 9 || Number(age) > 99;

  const handleOnboarding = async () => {
    userDispatch(setAge(Number(age)));
    userDispatch(finishOnboarding());

    await updateStorage({
      ...user,
      onboardingFinished: true,
      personal: { ...user.personal, age: Number(age) },
    });

    router.push('/(stack)/(tabs)/home');
  };

  const formatAge = (value: string) => {
    const valueArr = [...value];

    if (valueArr[0] === '0') {
      valueArr.shift();
    }

    if (valueArr.length < 3) {
      updateAge(valueArr.join(''));
    }
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={64}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={OnboardingStyles.main}
    >
      <Container>
        <Pressable
          onPress={Keyboard.dismiss}
          style={OnboardingStyles.container}
        >
          <View>
            <Typography
              weight='bold'
              styles={OnboardingStyles.title}
            >
              Edad
            </Typography>
          </View>
          <View style={OnboardingStyles.valueContainer}>
            <TextInput
              style={OnboardingStyles.value}
              value={age}
              onChangeText={formatAge}
              inputMode='numeric'
              keyboardType={Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'decimal-pad'}
              placeholder='30'
            />
            <Typography styles={OnboardingStyles.unit}>Años</Typography>
          </View>
          <View style={OnboardingStyles.continueContainer}>
            <Pressable
              style={{
                ...OnboardingStyles.continueButton,
                backgroundColor: isInvalidAge ? Colors.light.line : Colors.light['growfit+'],
              }}
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onPress={handleOnboarding}
              disabled={isInvalidAge}
            >
              <Typography
                weight='bold'
                styles={{
                  color: isInvalidAge ? Colors.light.gray[3] : Colors.light['dark+'],
                  ...OnboardingStyles.continueButtonText,
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

export default Age;
