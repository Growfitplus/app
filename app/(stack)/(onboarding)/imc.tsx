import React, { useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';

import AnimatedNumbers from 'react-native-animated-numbers';

import Container from '@/components/Container';
import Typography from '@/components/Typography';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { router } from 'expo-router';

const IMC = () => {
  const [animateToNumber, setAnimateToNumber] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let timeOut: NodeJS.Timeout;

    if (animateToNumber < 100) {
      interval = setInterval(() => {
        increase();
      }, 50);
    } else {
      timeOut = setTimeout(() => {
        router.push('/(stack)/(onboarding)/results');
      }, 500);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeOut);
    };
  }, [animateToNumber]);

  const increase = () => {
    setAnimateToNumber(animateToNumber + 1);
  };

  return (
    <SafeAreaView style={{ backgroundColor: Colors.light['background+'], flex: 1 }}>
      <Container>
        <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row' }}>
            <AnimatedNumbers
              includeComma
              animateToNumber={animateToNumber}
              fontStyle={{
                color: animateToNumber === 100 ? Colors.light.success : Colors.light['dark+'],
                fontFamily: Fonts.RobotoBold,
                fontSize: 80,
              }}
            />
            <Typography
              weight='bold'
              customStyles={{
                color: animateToNumber === 100 ? Colors.light.success : Colors.light['dark+'],
                fontSize: 80,
              }}
            >
              %
            </Typography>
          </View>
          <Typography
            weight='bold'
            customStyles={{ fontSize: 16 }}
          >
            {animateToNumber < 100 ? 'Personalizando' : 'Listo'}
          </Typography>
        </View>
        <View>
          <Typography
            weight='bold'
            customStyles={{ fontSize: 16 }}
          >
            {animateToNumber < 100 ? 'Analizando IMC...' : ''}
          </Typography>
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default IMC;
