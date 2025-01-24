import React from 'react';
import { StyleSheet, View, SafeAreaView, FlatList } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { useUserContext } from '@/contexts/user/context';
import { addImage, setWeight } from '@/contexts/user/actions';
import { useStorageContext } from '@/contexts/storage/context';

import Container from '@/components/Container';
import PressableWithEffect from '@/components/PressableWithEffect';
import Add from '@/components/SVG/Add';
import Subtract from '@/components/SVG/Subtract';
import Typography from '@/components/Typography';
import PhotosProgress from '@/components/PhotosProgress';

import { Colors } from '@/constants/Colors';

const Progress = () => {
  const [user, userDispatch] = useUserContext();
  const [{ isLoading }] = useStorageContext();
  const { media: { images } = { images: [] }, personal: { weight } = { weight: 0 } } = user;
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

  const setNewWeight = (value: number) => {
    if (weight > 0) {
      userDispatch(setWeight(value));
    }
  };

  const pickImageAsync = async () => {
    if (status?.granted) {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        quality: 1,
      });

      if (!result.canceled) {
        userDispatch(
          addImage({
            id: result.assets[0].fileName!,
            uri: result.assets[0].uri,
          }),
        );
      }
    } else {
      await requestPermission();
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      <Container>
        <Typography
          weight='bold'
          customStyles={styles.title}
        >
          Mi Progreso
        </Typography>
        <View style={styles.dataContainer}>
          <PressableWithEffect
            customStyles={styles.addPhotoCard}
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onPressAction={pickImageAsync}
            isEnabled={!isLoading}
          >
            <Typography customStyles={styles.addIcon}>+</Typography>
            <View>
              <Typography customStyles={styles.addPhotoText}>Nueva</Typography>
              <Typography customStyles={styles.addPhotoText}>Foto</Typography>
            </View>
          </PressableWithEffect>
          <View style={styles.weightData}>
            <Typography customStyles={{ fontSize: 16 }}>Peso Actual</Typography>
            <View style={styles.weightContainer}>
              <PressableWithEffect
                onPressAction={() => setNewWeight(weight - 1)}
                isEnabled={!isLoading}
              >
                <Subtract />
              </PressableWithEffect>
              <Typography customStyles={{ fontSize: 32 }}>{weight}</Typography>
              <PressableWithEffect
                onPressAction={() => setNewWeight(weight + 1)}
                isEnabled={!isLoading}
              >
                <Add />
              </PressableWithEffect>
            </View>
          </View>
        </View>
        <FlatList
          data={images}
          renderItem={({ item }) => <PhotosProgress imageSource={item.uri} />}
          numColumns={3}
          style={{
            paddingTop: 8,
          }}
          contentContainerStyle={{
            gap: 8,
          }}
          columnWrapperStyle={{
            gap: 8,
            justifyContent: 'flex-start',
          }}
        />
      </Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  addIcon: {
    color: Colors.light.success,
    fontSize: 18,
  },
  addPhotoCard: {
    backgroundColor: Colors.light['white+'],
    borderRadius: 20,
    height: 104,
    justifyContent: 'space-between',
    padding: 12,
    width: 104,
  },
  addPhotoText: {
    fontSize: 12,
    textAlign: 'right',
  },
  dataContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  main: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 52,
  },
  weightButton: {
    alignItems: 'center',
    borderColor: Colors.light['dark+'],
    borderRadius: 24,
    borderWidth: 2,
    height: 24,
    justifyContent: 'center',
  },
  weightContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 16,
  },
  weightData: {
    alignItems: 'center',
    flex: 1,
    gap: 8,
    justifyContent: 'center',
  },
});

export default Progress;
