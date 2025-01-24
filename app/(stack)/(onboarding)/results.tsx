import React from 'react';
import { Pressable, SafeAreaView, View } from 'react-native';
// import { router } from 'expo-router';

// import { finishOnboarding } from '@/contexts/user/actions';
// import { useUserContext } from '@/contexts/user/context';

import Container from '@/components/Container';
import Bar from '@/components/IMC/Bar';
import Typography from '@/components/Typography';

import { Colors } from '@/constants/Colors';

import { OnboardingStyles } from '@/styles/onboarding';

const Results = () => {
  // const [, userDispatch] = useUserContext();

  const handleOnboarding = async () => {
    // userDispatch();
    // userDispatch(finishOnboarding());
    // await updateStorage({
    //   ...user,
    //   onboardingFinished: true,
    //   personal: { ...user.personal, age: Number(age) },
    // });
    // router.push('/(stack)/(tabs)/home');
  };

  return (
    <SafeAreaView style={{ backgroundColor: Colors.light['background+'], flex: 1 }}>
      <Container>
        <Typography
          weight='bold'
          customStyles={{ fontSize: 24 }}
        >
          Resultados
        </Typography>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Typography
            weight='bold'
            customStyles={{ fontSize: 22 }}
          >
            Obesidad Media
          </Typography>
          <Bar />
          <Typography
            weight='bold'
            customStyles={{ fontSize: 16, marginBottom: 58 }}
          >
            IMC 39 / 24.9
          </Typography>
          <Typography
            weight='bold'
            customStyles={{ fontSize: 24 }}
          >
            Pongámonos una Meta
          </Typography>
          <Typography
            weight='bold'
            customStyles={{ fontSize: 20 }}
          >
            Bajar 1 a 5 kg al mes.
          </Typography>
          <Typography
            weight='bold'
            customStyles={{ fontSize: 14 }}
          >
            Durante los próximos 12 meses
          </Typography>
        </View>
        <View></View>
        <Pressable
          style={{
            ...OnboardingStyles.continueButton,
            backgroundColor: Colors.light['growfit+'],
          }}
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onPress={handleOnboarding}
        >
          <Typography
            weight='bold'
            customStyles={{
              color: Colors.light['dark+'],
              ...OnboardingStyles.continueButtonText,
            }}
          >
            Ir a Growfit+
          </Typography>
        </Pressable>
      </Container>
    </SafeAreaView>
  );
};

export default Results;
