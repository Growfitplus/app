import { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Pressable } from 'react-native';
import { router, useNavigation } from 'expo-router';

import Typography from '@/components/Typography';
import { Colors } from '@/constants/Colors';

const Onboarding = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

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
          <Pressable
            style={({ pressed }) => ({ ...styles.option, opacity: pressed ? 0.5 : 1 })}
            onPress={() => router.push('/(stack)/(onboarding)/height')}
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
          </Pressable>
          <Pressable
            style={({ pressed }) => ({ ...styles.option, opacity: pressed ? 0.5 : 1 })}
            onPress={() => router.push('/(stack)/(onboarding)/height')}
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
          </Pressable>
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
    color: Colors.light.text.input,
    fontSize: 12,
    textAlign: 'right',
  },
  genreContainer: {
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'flex-end',
  },
  main: {
    backgroundColor: Colors.light['screen-bg'],
    flex: 1,
  },
  option: {
    backgroundColor: 'white',
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
    color: Colors.light.text.emphasis,
    fontSize: 16,
  },
});

export default Onboarding;
