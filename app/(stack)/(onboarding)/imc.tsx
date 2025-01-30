import React, { useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';

import AnimatedNumbers from 'react-native-animated-numbers';

import Container from '@/components/Container';
import Typography from '@/components/Typography';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { router, useNavigation } from 'expo-router';
import { useUserContext } from '@/contexts/user/context';
import {
  getIMCLevel,
  getLitersGoal,
  getMaintainWeight,
  getManLoseWeight,
  getWalkingGoal,
  getWomanLoseWeight,
} from '@/utils/nutritionFormulas';
import { GENRE_TYPES } from '@/contexts/user/types';
import { setIMCData } from '@/contexts/user/actions';

const IMC = () => {
  const [{ personal }, userDispatch] = useUserContext();
  const [animateToNumber, setAnimateToNumber] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    calculateIMC();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let timeOut: NodeJS.Timeout;

    if (animateToNumber < 100) {
      interval = setInterval(() => {
        increase();
      }, 30);
    } else {
      timeOut = setTimeout(() => {
        router.push('/(stack)/(onboarding)/results');
      }, 1250);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeOut);
    };
  }, [animateToNumber]);

  const increase = () => {
    setAnimateToNumber(animateToNumber + 1);
  };

  const calculateIMC = () => {
    const { age, genre, height, weight } = personal;
    const squaredHeigth = height ** 2;
    const imc = Number((weight / squaredHeigth).toFixed(2));
    const fullHeight = Number(height.toString().replace('.', ''));
    const maintainWeight = Math.round(getMaintainWeight({ age, height: fullHeight, weight }));
    const walkingGoal = Math.round(getWalkingGoal({ weight }));
    const litersGoal = Math.round(getLitersGoal({ weight }));
    const imcLevel = getIMCLevel({ imc });
    let loseWeight;

    if (genre === GENRE_TYPES.Masculine) {
      loseWeight = Math.round(getManLoseWeight({ age, height: fullHeight, weight }));
    } else {
      loseWeight = Math.round(getWomanLoseWeight({ age, height: fullHeight, weight }));
    }

    userDispatch(
      setIMCData({
        imc,
        imcLevel,
        litersGoal,
        loseWeight,
        maintainWeight,
        walkingGoal,
      }),
    );
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
