import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { StyleSheet } from 'react-native';

export const OnboardingStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 48,
    paddingTop: 32,
  },
  continueButton: {
    alignItems: 'center',
    borderRadius: 16,
    justifyContent: 'center',
    padding: 16,
    width: '100%',
  },
  continueButtonText: {
    fontSize: 16,
  },
  continueContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    backgroundColor: Colors.light['background+'],
    flex: 1,
  },
  title: {
    fontSize: 24,
  },
  unit: {
    fontSize: 16,
  },
  value: {
    color: Colors.light['dark+'],
    fontFamily: Fonts.RobotoRegular,
    fontSize: 72,
  },
  valueContainer: {
    alignItems: 'center',
    flex: 1,
    gap: 12,
    justifyContent: 'center',
  },
});
