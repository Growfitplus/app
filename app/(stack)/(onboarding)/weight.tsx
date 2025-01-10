import { router } from 'expo-router';
import { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, TextInput, View } from 'react-native';

import Typography from '@/components/Typography';
import { Colors } from '@/constants/Colors';
import { setWeight } from '@/contexts/user/actions';
import { useUserContext } from '@/contexts/user/context';
import Container from '@/components/Container';
import { OnboardingStyles } from '@/styles/onboarding';

const Weight = () => {
  const [user, dispatch] = useUserContext();
  const [weight, updateWeight] = useState(user.data.weight.toString());
  const isInvalidWeight = Number(weight) < 30 || Number(weight) > 200;

  const handleContinue = () => {
    dispatch(setWeight(Number(weight)));

    router.push('/(stack)/(onboarding)/age');
  };

  const formatWeight = (value: string) => {
    const valueArr = [...value];

    if (valueArr[0] === '0') {
      valueArr.shift();
    }

    if (valueArr.length < 4) {
      updateWeight(valueArr.join(''));
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
              Peso actual
            </Typography>
          </View>
          <View style={OnboardingStyles.valueContainer}>
            <TextInput
              style={OnboardingStyles.value}
              value={weight}
              onChangeText={formatWeight}
              inputMode='numeric'
              keyboardType={Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'decimal-pad'}
              placeholder='70'
            />
            <Typography styles={OnboardingStyles.unit}>Kilos</Typography>
          </View>
          <View style={OnboardingStyles.continueContainer}>
            <Pressable
              style={{
                ...OnboardingStyles.continueButton,
                backgroundColor: isInvalidWeight ? Colors.light.line : Colors.light['growfit+'],
              }}
              onPress={handleContinue}
              disabled={isInvalidWeight}
            >
              <Typography
                weight='bold'
                styles={{
                  color: isInvalidWeight ? Colors.light.gray[3] : Colors.light['dark+'],
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

export default Weight;
