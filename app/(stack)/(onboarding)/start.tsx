import { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Pressable } from 'react-native';
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
              <Typography weight='bold' styles={styles.sign}>♂</Typography>
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
              <Typography weight='bold' styles={styles.sign}>♀</Typography>
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
    backgroundColor: 'white',
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
  }
});

export default Onboarding;
