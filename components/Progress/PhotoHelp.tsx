import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { Colors } from '@/constants/Colors';

import BottomSheet from '../BottomSheet';
import Typography from '../Typography';
import { CameraFillIcon, CheckIcon } from '../Icons';

interface PhotoHelpProps {
  isVisible: boolean;
  closeSheet: () => void;
}

const PhotoHelp: FC<PhotoHelpProps> = ({ isVisible, closeSheet }) => {
  return (
    <BottomSheet
      isVisible={isVisible}
      closeSheet={closeSheet}
    >
      <View style={styles.main}>
        <View style={styles.titleContainer}>
          <CameraFillIcon
            size={24}
            color={Colors.light['dark+']}
          />
          <Typography
            weight='bold'
            customStyles={{ fontSize: 18 }}
          >
            Selfie de seguimiento
          </Typography>
        </View>
        <Typography
          weight='bold'
          customStyles={styles.subTitle}
        >
          Haz una selfie cada 2 semanas
        </Typography>
        <Typography>
          Debes fotografiarte siempre en la misma posición, lugar y hora con la menor cantidad de
          ropa posible, para poder ir dejando registro de tu progreso.
        </Typography>
        <View style={{ alignItems: 'center', marginTop: 36 }}>
          <View
            style={{
              alignItems: 'center',
              backgroundColor: Colors.light['growfit+'],
              borderRadius: 15,
              height: 40,
              justifyContent: 'center',
              width: 40,
            }}
          >
            <CheckIcon
              size={24}
              color={Colors.light.gray[1]}
            />
          </View>
        </View>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  logOutText: { color: '#FF002E', fontSize: 16 },
  main: {
    paddingVertical: 36,
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 8,
    marginTop: 16,
  },
  titleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
});

export default PhotoHelp;
