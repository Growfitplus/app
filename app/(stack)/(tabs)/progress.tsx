import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { useMediaLibraryPermissions, launchImageLibraryAsync } from 'expo-image-picker';
import { runOnJS } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useUserContext } from '@/contexts/user/context';
import { addImage, removeImage, setWeight } from '@/contexts/user/actions';
import { useStorageContext } from '@/contexts/storage/context';

import { Colors } from '@/constants/Colors';

import Container from '@/components/Container';
import PressableWithEffect from '@/components/PressableWithEffect';
import Add from '@/components/SVG/Add';
import Subtract from '@/components/SVG/Subtract';
import Typography from '@/components/Typography';
import PhotosProgress from '@/components/Progress/PhotosProgress';
import Preview from '@/components/Progress/Preview';
import { InfoFillSVG } from '@/components/SVG';
import PhotoHelp from '@/components/Progress/PhotoHelp';

const Progress = () => {
  const [user, userDispatch] = useUserContext();
  const [{ isLoading }] = useStorageContext();
  const [showPreview, setShowPreview] = useState(false);
  const [showPhotoHelp, setShowPhotoHelp] = useState(false);
  const [preview, setPreview] = useState<{ date: string; id: string; preview: string } | null>();
  const [status, requestPermission] = useMediaLibraryPermissions();
  const { media: { images } = { images: [] }, personal: { weight } = { weight: 0 } } = user;

  const setNewWeight = (value: number) => {
    if (weight > 0) {
      userDispatch(setWeight(value));
    }
  };

  const pickImageAsync = async () => {
    if (status?.granted) {
      const result = await launchImageLibraryAsync({
        mediaTypes: ['images'],
        quality: 1,
      });

      if (!result.canceled) {
        userDispatch(
          addImage({
            date: new Intl.DateTimeFormat('es', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            }).format(new Date()),
            id: result.assets[0].fileName!,
            uri: result.assets[0].uri,
          }),
        );
      }
    } else {
      await requestPermission();
    }
  };

  const handlePreview = ({ date, id, preview }: { date: string; id: string; preview: string }) => {
    setShowPreview(true);
    setPreview({ date, id, preview });
  };

  const handleRemoveImg = () => {
    if (preview) {
      setShowPreview(false);
      setPreview(null);

      const newImages = [...images].filter(img => img.id !== preview.id);

      userDispatch(removeImage(newImages));
    }
  };

  const closeSheet = () => {
    'worklet';
    runOnJS(setShowPhotoHelp)(false);
  };

  return (
    <SafeAreaView style={styles.main}>
      <Container>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 52,
          }}
        >
          <Typography
            weight='bold'
            customStyles={styles.title}
          >
            Mi Progreso
          </Typography>
          <PressableWithEffect onPressAction={() => setShowPhotoHelp(!showPhotoHelp)}>
            <InfoFillSVG />
          </PressableWithEffect>
        </View>
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
          renderItem={({ item }) => (
            <PhotosProgress
              imageSource={item.uri}
              handlePreview={() =>
                handlePreview({ date: item.date, id: item.id, preview: item.uri })
              }
            />
          )}
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
      {preview && (
        <Preview
          isVisible={showPreview}
          data={preview}
          closeModal={() => setShowPreview(!showPreview)}
          removeImg={handleRemoveImg}
        />
      )}
      <PhotoHelp
        isVisible={showPhotoHelp}
        closeSheet={closeSheet}
      />
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
