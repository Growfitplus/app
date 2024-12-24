import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSession } from '@/contexts/session';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Info from '@/components/svg/Info';


const Profile: React.FC<{isVisible: boolean, handleAbout: () => void, handleExit: () => void}> = ({isVisible, handleExit, handleAbout}) =>  {


  return (
    <Modal animationType="slide" transparent={true} visible={isVisible} >
      <View style={styles.modalContent}>
        <Pressable style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 30,
        }}
          onPress={handleAbout}
        >
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 24,
            flex: 1
          }}>
            <Info />
            <Text style={{fontSize: 16}}>Sobre Growfit+</Text>
          </View>
          <AntDesign name="right" size={24} color="black" />
        </Pressable>
        <Pressable style={styles.row} onPress={handleExit}>
          <MaterialCommunityIcons name="login-variant" size={24} color="#FF002E" style={{
            transform: [{rotate: '180deg'}]
          }} />
          <Text style={{fontSize: 16, color: '#FF002E' }}>Cerrar Sesión</Text>
        </Pressable>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    gap: 24,
  }


});

export default Profile
