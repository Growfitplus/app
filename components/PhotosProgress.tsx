import React from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { Image } from 'expo-image';

const PhotosProgress = ({ imageSource }: { imageSource: string }) => {
  const { width: widthScreen } = useWindowDimensions();

  const dimensions = Math.floor((widthScreen - 56) / 3) - 4

  return (
    <Image
      source={{ uri: imageSource }}
      style={{
        borderRadius: 16,
        width: dimensions,
        height: dimensions,
      }}
    />
  );
};

export default PhotosProgress;
