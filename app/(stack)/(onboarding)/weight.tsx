import Typography from '@/components/Typography';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { router } from 'expo-router';
import { useState } from 'react';
import { Keyboard, Platform, Pressable, SafeAreaView, StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native';

const Weight = () => {
  const [weight, setWeight] = useState(0);

  return (
    <SafeAreaView style={styles.main}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View>
            <Typography
              weight='bold'
              styles={{ fontSize: 24 }}
            >
              Peso actual
            </Typography>
          </View>
          <View style={styles.valueContainer}>
            <TextInput
              style={styles.value}
              value={weight.toString()}
              onChangeText={text => setWeight(Number(text))}
              inputMode='decimal'
              keyboardType={Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'decimal-pad'}
            />
            <Typography styles={styles.kg}>Kilos</Typography>
          </View>
          <View style={styles.continueContainer}>
            <Pressable
              style={{
                ...styles.continueButton,
                backgroundColor:
                  weight === 0 ? Colors.light.button.disabled : Colors.light['main-primary'],
              }}
              onPress={() => router.push('/(stack)/(onboarding)/age')}
              disabled={weight === 0}
            >
              <Typography
                weight='bold'
                styles={{
                  color: weight === 0 ? Colors.light.text.disabled : Colors.light.text.emphasis,
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
  kg: {
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

export default Weight;
