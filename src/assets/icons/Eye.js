import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

function Eye(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      className="prefix__icon prefix__icon-tabler prefix__icon-tabler-eye"
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
      <Circle cx={12} cy={12} r={2} />
      <Path d="M22 12c-2.667 4.667-6 7-10 7s-7.333-2.333-10-7c2.667-4.667 6-7 10-7s7.333 2.333 10 7" />
    </Svg>
  )
}

export default Eye
