import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Moon = () => (
  <Svg
    width={14}
    height={14}
    fill='none'
  >
    <Path
      fill='#FAFBFF'
      fillRule='evenodd'
      d='M6.921 1.535a.437.437 0 0 1-.029.475 3.646 3.646 0 0 0 5.1 5.099.438.438 0 0 1 .695.392A5.687 5.687 0 1 1 6.5 1.314a.438.438 0 0 1 .421.221Z'
      clipRule='evenodd'
    />
  </Svg>
);

export default Moon;
