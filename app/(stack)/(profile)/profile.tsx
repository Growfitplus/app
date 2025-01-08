import { Modal, Pressable, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import { ChevronNextIcon, LogOutIcon } from '@/components/Icons';
import Typography from '@/components/Typography';
import InfoIcon from '@/components/SVG/Info';
import { useUserContext } from '@/contexts/user/context';
import { logOut } from '@/contexts/user/actions';
import { useStorageContext } from '@/contexts/storage/context';
import { finishStorage, settingStorage } from '@/contexts/storage/actions';
import * as SecureStore from 'expo-secure-store';

const Profile: React.FC<{
  isVisible: boolean;
  handleAbout: () => void;
}> = ({ isVisible, handleAbout }) => {
  const [user, userDispatch] = useUserContext();
  const [, storageDispatch] = useStorageContext();

  const handleExit = async () => {
    try {
      storageDispatch(settingStorage());

      await SecureStore.setItemAsync('session', JSON.stringify({ ...user, hasSession: false }));
    } catch (e) {
      console.error('Secure Store is unavailable:', e);
    } finally {
      storageDispatch(finishStorage());
    }
    userDispatch(logOut());
  };

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={isVisible}
    >
      <View style={styles.main}>
        <Pressable
          style={styles.pressable}
          onPress={handleAbout}
        >
          <View style={styles.termsContainer}>
            <InfoIcon
              width={24}
              height={24}
            />
            <Typography styles={styles.termsText}>Sobre Growfit+</Typography>
          </View>
          <ChevronNextIcon
            size={24}
            color='black'
          />
        </Pressable>
        <Pressable
          style={styles.pressable}
          onPress={handleExit}
        >
          <LogOutIcon
            size={24}
            color='#FF002E'
          />
          <Typography styles={styles.logOutText}>Cerrar Sesión</Typography>
        </Pressable>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '25%',
    width: '100%',
    backgroundColor: 'white',
    borderTopRightRadius: 34,
    borderTopLeftRadius: 34,
    position: 'absolute',
    bottom: 0,
    padding: 25,
    gap: 38,
    justifyContent: 'center',
  },
  pressable: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    gap: 24,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    flex: 1,
  },
  termsText: { fontSize: 16 },
  logOutText: { fontSize: 16, color: '#FF002E' },
});

export default Profile;
