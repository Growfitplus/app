import { FC } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { useUserContext } from '@/contexts/user/context';
import { logOut } from '@/contexts/user/actions';

import useStorage from '@/hooks/useStorage';

import { ChevronNextIcon, LogOutIcon } from '@/components/Icons';
import Typography from '@/components/Typography';
import { InfoSVG } from '@/components/SVG';

import BottomSheet from '@/components/BottomSheet';

interface ProfileProps {
  isVisible: boolean;
  handleAbout: () => void;
  closeSheet: () => void;
}

const Profile: FC<ProfileProps> = ({ isVisible, handleAbout, closeSheet }) => {
  const [user, userDispatch] = useUserContext();
  const { updateStorage } = useStorage();

  const handleExit = async () => {
    await updateStorage({ ...user, hasSession: false });

    userDispatch(logOut());
  };

  return (
    <BottomSheet
      isVisible={isVisible}
      closeSheet={closeSheet}
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
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  logOutText: { color: '#FF002E', fontSize: 16 },
  main: {
    gap: 36,
    paddingVertical: 36,
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
