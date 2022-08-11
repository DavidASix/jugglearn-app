import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ChevronLeft(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      className="prefix__icon prefix__icon-tabler prefix__icon-tabler-chevron-left"
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
      <Path d="M15 6l-6 6 6 6" />
    </Svg>
  )
}

export default ChevronLeft
