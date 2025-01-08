import { useEffect } from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { router, useNavigation } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

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
                  ? Colors.light['main-primary']
                  : Colors.light.white,
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
                  ? Colors.light['main-primary']
                  : Colors.light.white,
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
  main: {
    backgroundColor: Colors.light['screen-bg'],
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 22,
    paddingVertical: 32,
  },
  optionsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  option: {
    borderRadius: 20,
    width: 152,
    height: 152,
    padding: 12,
  },
  sign: {
    color: Colors.light.text.emphasis,
    fontSize: 16,
  },
  genreContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  genre: {
    color: Colors.light.text.input,
    fontSize: 12,
    textAlign: 'right',
  },
});

export default Onboarding;
