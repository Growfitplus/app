import React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Clock = () => {
  return (
    <Svg
      width={24}
      height={24}
      fill='none'
    >
      <Path
        fill='#232A38'
        fillRule='evenodd'
        d='M9 4.75h6A4.25 4.25 0 0 1 19.25 9v6A4.25 4.25 0 0 1 15 19.25H9A4.25 4.25 0 0 1 4.75 15V9A4.25 4.25 0 0 1 9 4.75ZM3 9a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6V9Zm9.875-1h-1.75v5.375H16v-1.75h-3.125V8Z'
        clipRule='evenodd'
      />
    </Svg>
  );
};

export default Clock;
