import { Modal, Pressable, StyleSheet, View } from 'react-native';

import { ChevronNextIcon, LogOutIcon } from '@/components/Icons';
import Typography from '@/components/Typography';
import { InfoSVG } from '@/components/SVG';
import { useUserContext } from '@/contexts/user/context';
import { logOut } from '@/contexts/user/actions';
import { Colors } from '@/constants/Colors';
import useStorage from '@/hooks/useStorage';

const Profile: React.FC<{
  isVisible: boolean;
  handleAbout: () => void;
}> = ({ isVisible, handleAbout }) => {
  const [user, userDispatch] = useUserContext();
  const { updateStorage } = useStorage();

  const handleExit = async () => {
    await updateStorage({ ...user, hasSession: false });

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
            <InfoSVG
              width={24}
              height={24}
            />
            <Typography customStyles={styles.termsText}>Sobre Growfit+</Typography>
          </View>
          <ChevronNextIcon
            size={24}
            color='black'
          />
        </Pressable>
        <Pressable
          style={styles.pressable}
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onPress={handleExit}
        >
          <LogOutIcon
            size={24}
            color='#FF002E'
          />
          <Typography customStyles={styles.logOutText}>Cerrar Sesión</Typography>
        </Pressable>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  logOutText: { color: '#FF002E', fontSize: 16 },
  main: {
    backgroundColor: Colors.light['white+'],
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    bottom: 0,
    gap: 38,
    height: '25%',
    justifyContent: 'center',
    padding: 25,
    position: 'absolute',
    width: '100%',
  },
  pressable: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 24,
    height: 30,
  },
  termsContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    gap: 30,
  },
  termsText: { fontSize: 16 },
});

export default Profile;
