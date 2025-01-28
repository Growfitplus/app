import React from 'react';
import { useWindowDimensions } from 'react-native';
import { Image } from 'expo-image';

import PressableWithEffect from '../PressableWithEffect';

interface PhotosProgressProps {
  imageSource: string;
  handlePreview: () => void;
}

const PhotosProgress: React.FC<PhotosProgressProps> = ({ imageSource, handlePreview }) => {
  const { width: widthScreen } = useWindowDimensions();

  const dimensions = Math.floor((widthScreen - 56) / 3) - 4;

  return (
    <PressableWithEffect onPressAction={handlePreview}>
      <Image
        source={{ uri: imageSource }}
        style={{
          borderRadius: 16,
          height: dimensions,
          width: dimensions,
        }}
      />
    </PressableWithEffect>
  );
};

export default PhotosProgress;
