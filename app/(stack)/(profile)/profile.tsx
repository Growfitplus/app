import { Modal, Pressable, StyleSheet, View } from 'react-native';

import { ChevronNextIcon, LogOutIcon } from '@/components/Icons';
import Typography from '@/components/Typography';
import { InfoSVG } from '@/components/SVG';

const Profile: React.FC<{
  isVisible: boolean;
  handleAbout: () => void;
  handleExit: () => void;
}> = ({ isVisible, handleExit, handleAbout }) => {
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
  logOutText: { color: '#FF002E', fontSize: 16 },
  main: {
    backgroundColor: 'white',
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
