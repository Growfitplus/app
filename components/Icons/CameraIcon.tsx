import Feather from '@expo/vector-icons/Feather';

const CameraIcon = (props: Record<string, unknown>) => (
  <Feather
    name='camera'
    size={24}
    color='black'
    {...props}
  />
);

export default CameraIcon;
