import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const LogOutIcon = (props: Record<string, unknown>) => (
  <MaterialCommunityIcons
    name='login-variant'
    style={{
      transform: [{ rotate: '180deg' }],
    }}
    {...props}
  />
);

export default LogOutIcon;
