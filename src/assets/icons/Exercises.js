import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function Exercises(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox='0 0 34.778 31.5'
      {...props}
    >
      <G
        fill="none"
        stroke={props.color || "#6395e9"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path
          data-name="Path 35"
          d="M1 1h9.833a6.556 6.556 0 016.556 6.556V30.5a4.917 4.917 0 00-4.917-4.917H1z"
        />
        <Path
          data-name="Path 36"
          d="M33.778 1h-9.833a6.556 6.556 0 00-6.556 6.556V30.5a4.917 4.917 0 014.917-4.917h11.472z"
        />
      </G>
    </Svg>
  )
}

export default Exercises;
