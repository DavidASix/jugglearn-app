import * as React from "react"
import Svg, { Path } from "react-native-svg"

function EyeOff(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      className="prefix__icon prefix__icon-tabler prefix__icon-tabler-eye-off"
      width={props.size || '100%'}
      height={props.size || '100%'}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={props.color || "#000"}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="M3 3l18 18M10.584 10.587a2 2 0 002.828 2.83" />
      <Path d="M9.363 5.365A9.466 9.466 0 0112 5c4 0 7.333 2.333 10 7-.778 1.361-1.612 2.524-2.503 3.488m-2.14 1.861C15.726 18.449 13.942 19 12 19c-4 0-7.333-2.333-10-7 1.369-2.395 2.913-4.175 4.632-5.341" />
    </Svg>
  )
}

export default EyeOff
