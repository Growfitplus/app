import React, { useState } from 'react';
import { Modal, Pressable, useWindowDimensions, View } from 'react-native';
import { Image } from 'expo-image';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from '@/constants/Colors';

import Typography from '../Typography';
import { CloseSVG } from '../SVG';
import PressableWithEffect from '../PressableWithEffect';

interface PreviewProps {
  isVisible: boolean;
  data: { date: string; id: string; preview: string };
  closeModal: () => void;
  removeImg: () => void;
}

const Preview: React.FC<PreviewProps> = ({ isVisible, data, closeModal, removeImg }) => {
  const { height: heighScreen, width: widthScreen } = useWindowDimensions();
  const [advertise, setAdvertise] = useState(false);

  const handleRemoveImage = () => {
    setAdvertise(false);
    removeImg();
  };

  return (
    <Modal
      animationType='slide'
      visible={isVisible}
    >
      <SafeAreaView
        style={{
          backgroundColor: Colors.light['white+'],
          height: '100%',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Pressable
          style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: 24 }}
          onPress={closeModal}
        >
          <CloseSVG />
        </Pressable>
        <Typography
          weight='bold'
          customStyles={{ fontSize: 16, paddingHorizontal: 24 }}
        >
          {data?.date ?? 'Fecha'}
        </Typography>
        <Image
          source={{ uri: data.preview }}
          style={{
            height: heighScreen * 0.75,
            marginVertical: 24,
            width: '100%',
          }}
        />
        <Pressable
          style={{ alignItems: 'center', justifyContent: 'center' }}
          onPress={() => setAdvertise(true)}
        >
          <Typography
            weight='bold'
            customStyles={{ color: Colors.light.error, fontSize: 16 }}
          >
            Eliminar
          </Typography>
        </Pressable>
        <Modal
          visible={advertise}
          transparent={true}
        >
          <View
            style={{
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <View
              style={{
                backgroundColor: Colors.light['white+'],
                borderRadius: 8,
                height: heighScreen * 0.25,
                padding: 24,
                width: widthScreen * 0.75,
              }}
            >
              <View style={{ flex: 1 }}>
                <Typography
                  weight='bold'
                  customStyles={{ fontSize: 16, marginBottom: 16 }}
                >
                  Eliminar foto
                </Typography>
                <Typography
                  weight='regular'
                  customStyles={{ fontSize: 14, marginBottom: 4 }}
                >
                  ¿Estás seguro?
                </Typography>
                <Typography
                  weight='regular'
                  customStyles={{ fontSize: 14 }}
                >
                  Una vez eliminada ya no podrás recuperarla
                </Typography>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  gap: 24,
                  justifyContent: 'flex-end',
                }}
              >
                <PressableWithEffect onPressAction={() => setAdvertise(false)}>
                  <Typography>Cancelar</Typography>
                </PressableWithEffect>
                <PressableWithEffect onPressAction={handleRemoveImage}>
                  <Typography
                    weight='bold'
                    customStyles={{ color: Colors.light.error }}
                  >
                    Eliminar
                  </Typography>
                </PressableWithEffect>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </Modal>
  );
};

export default Preview;
