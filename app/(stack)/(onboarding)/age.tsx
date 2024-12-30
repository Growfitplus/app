import { router } from 'expo-router';
import { Button, Keyboard, Platform, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';

import { useSession } from '@/contexts/session';
import { Colors } from '@/constants/Colors';
import Typography from '@/components/Typography';
import { Fonts } from '@/constants/Fonts';
import { useState } from 'react';

const Age = () => {
  const { finishOnboarding, session } = useSession();
  const [age, setAge] = useState(0);

  const handleOnboarding = () => {
    if (session) {
      finishOnboarding(session.username);
      router.replace('/(stack)/(tabs)/home');
    }
  };


  return (
    <SafeAreaView style={styles.main}>
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
          <View style={styles.valueContainer}>
            <TextInput
              style={styles.value}
              value={age.toString()}
              onChangeText={text => setAge(Number(text))}
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
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.light['screen-bg'],
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 22,
    paddingVertical: 32,
  },
  valueContainer: {
    alignItems: 'center',
    flex: 1,
    gap: 12,
    justifyContent: 'center',
  },
  value: {
    fontFamily: Fonts.RobotoRegular,
    fontSize: 72,
    color: Colors.light.text.emphasis
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
