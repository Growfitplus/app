import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';

export const ArrowBackIcon = (props: Record<string, unknown>) => (
  <Ionicons
    name='arrow-back'
    {...props}
  />
);

export const ArrowNextIcon = (props: Record<string, unknown>) => (
  <AntDesign
    name='arrowright'
    {...props}
  />
);

export const ChevronNextIcon = (props: Record<string, unknown>) => (
  <AntDesign
    name='right'
    {...props}
  />
);

export const LogOutIcon = (props: Record<string, unknown>) => (
  <MaterialCommunityIcons
    name='login-variant'
    style={{
      transform: [{ rotate: '180deg' }],
    }}
    {...props}
  />
);

export const CameraIcon = (props: Record<string, unknown>) => (
  <Feather
    name='camera'
    size={24}
    color='black'
    {...props}
  />
);
