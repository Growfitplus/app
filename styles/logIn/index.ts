import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

export const LogInStyles = StyleSheet.create({
  buttonBox: {
    alignItems: 'center',
    backgroundColor: Colors.light['white+'],
    borderRadius: 16,
    flexDirection: 'row',
    height: 56,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    width: 312,
  },
  buttonContainer: { gap: 20 },
  buttonText: {
    fontSize: 16,
  },
  logo: { alignItems: 'center', flex: 1, justifyContent: 'center' },
  main: {
    alignItems: 'center',
    backgroundColor: Colors.light['growfit+'],
    flex: 1,
    justifyContent: 'center',
  },

  preButtonText: { fontSize: 14, textAlign: 'center' },
});
