import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


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
