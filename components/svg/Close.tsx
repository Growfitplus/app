import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Close = () => (
  <Svg
    width={24}
    height={24}
    fill='none'
  >
    <Path
      fill='#080110'
      fillRule='evenodd'
      d='M13.237 12.27 20 5.507 18.762 4.27 12 11.033 5.237 4.27 4 5.507l6.762 6.763-6.4 6.4L5.6 19.907l6.4-6.4 6.4 6.4 1.237-1.237-6.4-6.4Z'
      clipRule='evenodd'
    />
  </Svg>
);

export default Close;
