import { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { router, useNavigation } from 'expo-router';

import Typography from '@/components/Typography';
import { Colors } from '@/constants/Colors';
import { useUserContext } from '@/contexts/user/context';
import { setGenre } from '@/contexts/user/actions';
import { GENRE_TYPES } from '@/contexts/user/types';
import PressableWithEffect from '@/components/PressableWithEffect';

const Onboarding = () => {
  const navigation = useNavigation();
  const [user, dispatch] = useUserContext();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const handleGenre = (genre: GENRE_TYPES) => {
    dispatch(setGenre(genre));

    router.push('/(stack)/(onboarding)/height');
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View>
          <Typography
            weight='bold'
            styles={{ fontSize: 24 }}
          >
            ¿Cuál es tu sexo?
          </Typography>
        </View>
        <View style={styles.optionsContainer}>
          <PressableWithEffect
            customStyles={{
              ...styles.option,
              backgroundColor:
                user.data.genre === GENRE_TYPES.Masculine
                  ? Colors.light['growfit+']
                  : Colors.light['white+'],
            }}
            onPressAction={() => handleGenre(GENRE_TYPES.Masculine)}
          >
            <View>
              <Typography
                weight='bold'
                styles={styles.sign}
              >
                ♂
              </Typography>
            </View>
            <View style={styles.genreContainer}>
              <Typography styles={styles.genre}>Masculino</Typography>
            </View>
          </PressableWithEffect>
          <PressableWithEffect
            customStyles={{
              ...styles.option,
              backgroundColor:
                user.data.genre === GENRE_TYPES.Feminine
                  ? Colors.light['growfit+']
                  : Colors.light['white+'],
            }}
            onPressAction={() => handleGenre(GENRE_TYPES.Feminine)}
          >
            <View>
              <Typography
                weight='bold'
                styles={styles.sign}
              >
                ♀
              </Typography>
            </View>
            <View style={styles.genreContainer}>
              <Typography styles={styles.genre}>Femenino</Typography>
            </View>
          </PressableWithEffect>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 22,
    paddingVertical: 32,
  },
  genre: {
    color: Colors.light['dark+'],
    fontSize: 12,
    textAlign: 'right',
  },
  genreContainer: {
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'flex-end',
  },
  main: {
    backgroundColor: Colors.light['background+'],
    flex: 1,
  },
  option: {
    borderRadius: 20,
    height: 152,
    padding: 12,
    width: 152,
  },
  optionsContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
  },
  sign: {
    color: Colors.light['dark+'],
    fontSize: 16,
  },
});

export default Onboarding;
