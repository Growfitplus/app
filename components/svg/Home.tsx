import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Home = () => (
  <Svg
    width={18}
    height={18}
    fill='none'
  >
    <Path
      fill='#232A38'
      fillRule='evenodd'
      d='M1.75 8.32V15c0 .69.56 1.25 1.25 1.25h12c.69 0 1.25-.56 1.25-1.25V8.32L9 2.278 1.75 8.32ZM0 7.5 9 0l9 7.5V15a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V7.5Z'
      clipRule='evenodd'
    />
  </Svg>
);

export default Home;
