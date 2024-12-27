import React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Info = () => {
  return (
    <Svg
      width={18}
      height={18}
      fill='none'
    >
      <Path
        fill='#000'
        fillRule='evenodd'
        d='M16.25 12V6A4.25 4.25 0 0 0 12 1.75H6A4.25 4.25 0 0 0 1.75 6v6A4.25 4.25 0 0 0 6 16.25h6A4.25 4.25 0 0 0 16.25 12ZM6 0a6 6 0 0 0-6 6v6a6 6 0 0 0 6 6h6a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6H6Zm2.125 14V8h1.75v6h-1.75Zm0-9.5v2h1.75v-2h-1.75Z'
        clipRule='evenodd'
      />
    </Svg>
  );
};

export default Info;
