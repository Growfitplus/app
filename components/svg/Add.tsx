import * as React from 'react';
import Svg, { Ellipse, Path } from 'react-native-svg';

const Add = () => (
  <Svg
    width={27}
    height={29}
    fill='none'
  >
    <Ellipse
      cx={13.922}
      cy={14.011}
      fill='#fff'
      rx={13.078}
      ry={13.441}
    />
    <Path
      fill='#080110'
      fillRule='evenodd'
      d='M13.5 25.891c6.151 0 11.137-5.125 11.137-11.447 0-6.322-4.986-11.447-11.137-11.447-6.151 0-11.137 5.125-11.137 11.447 0 6.322 4.986 11.447 11.137 11.447Zm0 2.428c7.456 0 13.5-6.212 13.5-13.875S20.956.57 13.5.57 0 6.781 0 14.444 6.044 28.32 13.5 28.32ZM8.1 15.832v-2.428h4.388v-4.51h2.362v4.51h4.05v2.428h-4.05v4.162h-2.362v-4.162H8.1Z'
      clipRule='evenodd'
    />
  </Svg>
);

export default Add;
