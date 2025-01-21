import { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, TextInput, View } from 'react-native';
import { router } from 'expo-router';

import { Colors } from '@/constants/Colors';
import Typography from '@/components/Typography';
import { useUserContext } from '@/contexts/user/context';
import { setHeight } from '@/contexts/user/actions';
import Container from '@/components/Container';
import { OnboardingStyles } from '@/styles/onboarding/index';

const Height = () => {
  const [user, dispatch] = useUserContext();
  const [height, updateHeight] = useState(user.personal.height.toString());
  const isInvalidHeight = Number(height) < 1.2 || Number(height) > 2.5;

  const handleContinue = () => {
    dispatch(setHeight(Number(height)));

    router.push('/(stack)/(onboarding)/weight');
  };

  const formatHeight = (value: string) => {
    const valueArr = [...value];

    if (valueArr[0] === '0') {
      valueArr.shift();
    }

    if (valueArr.length > 1 && valueArr[1] !== '.') {
      valueArr.splice(1, 0, '.');
    }

    if (valueArr.length < 5) {
      updateHeight(valueArr.join(''));
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
              Estatura
            </Typography>
          </View>
          <View style={OnboardingStyles.valueContainer}>
            <TextInput
              style={OnboardingStyles.value}
              value={height}
              onChangeText={formatHeight}
              inputMode='numeric'
              keyboardType={Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'decimal-pad'}
              textContentType='none'
              placeholder='175'
            />
            <Typography styles={OnboardingStyles.unit}>cms</Typography>
          </View>
          <View style={OnboardingStyles.continueContainer}>
            <Pressable
              style={{
                ...OnboardingStyles.continueButton,
                backgroundColor: isInvalidHeight ? Colors.light.line : Colors.light['growfit+'],
              }}
              onPress={handleContinue}
              disabled={isInvalidHeight}
            >
              <Typography
                weight='bold'
                styles={{
                  color: isInvalidHeight ? Colors.light.gray[3] : Colors.light['dark+'],
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

export default Height;
