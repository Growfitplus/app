import React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

interface InfoIconProps extends SvgProps {
  width?: number;
  height?: number;
}

export const Info: React.FC<InfoIconProps> = ({ width = 18, height = 18 }) => (
  <Svg
    viewBox='0 0 24 24'
    width={width}
    height={height}
    fill='none'
  >
    <Path
      fill='#000'
      fillRule='evenodd'
      d='M19.25 15V9A4.25 4.25 0 0 0 15 4.75H9A4.25 4.25 0 0 0 4.75 9v6A4.25 4.25 0 0 0 9 19.25h6A4.25 4.25 0 0 0 19.25 15ZM9 3a6 6 0 0 0-6 6v6a6 6 0 0 0 6 6h6a6 6 0 0 0 6-6V9a6 6 0 0 0-6-6H9Zm2.125 14v-6h1.75v6h-1.75Zm0-9.5v2h1.75v-2h-1.75Z'
      clipRule='evenodd'
    />
  </Svg>
);
export const InfoFill = () => (
  <Svg
    width={18}
    height={18}
    fill='none'
  >
    <Path
      fill='#000'
      fillRule='evenodd'
      d='M0 6a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6Zm8.125 8V8h1.75v6h-1.75Zm0-10v2h1.75V4h-1.75Z'
      clipRule='evenodd'
    />
  </Svg>
);
