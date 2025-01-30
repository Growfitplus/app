import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export const Camera = (props: Record<string, unknown>) => (
  <Feather
    name='camera'
    {...props}
  />
);

export const CameraFill = (props: Record<string, unknown>) => (
  <FontAwesome
    name='camera'
    {...props}
  />
);
