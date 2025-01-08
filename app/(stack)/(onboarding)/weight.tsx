import Typography from '@/components/Typography';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { setWeight } from '@/contexts/user/actions';
import { useUserContext } from '@/contexts/user/context';
import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';

const Weight = () => {
  const [user, dispatch] = useUserContext();
  const [weight, updateWeight] = useState(user.data.weight);
  const [keyboardActive, setKeyboardActive] = useState(false);

  const handleContinue = () => {
    dispatch(setWeight(Number(weight)));

    router.push('/(stack)/(onboarding)/age')
  }

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
              Peso actual
            </Typography>
          </View>
          <View style={[styles.valueContainer, { height: keyboardActive ? '70%' : '90%' }]}>
            <TextInput
              style={styles.value}
              value={weight.toString()}
              onChangeText={text => updateWeight(Number(text))}
              onFocus={() => setKeyboardActive(true)}
              onBlur={() => setKeyboardActive(false)}
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
              onPress={handleContinue}
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
    paddingHorizontal: 22,
    paddingVertical: 32,
  },
  valueContainer: {
    alignItems: 'center',
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
