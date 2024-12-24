import * as React from "react"
import Svg, { Path } from "react-native-svg"

const UserSVG = () => {
  return (
    <Svg
    width={16}
    height={18}
    fill="none"
  >
    <Path
      fill="#232A38"
      fillRule="evenodd"
      d="M10.25 4a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0ZM12 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM1.75 13c0-.69.56-1.25 1.25-1.25h10c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25H3c-.69 0-1.25-.56-1.25-1.25v-2ZM0 13a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-2Z"
      clipRule="evenodd"
    />
  </Svg>
  )
}

export default UserSVG
