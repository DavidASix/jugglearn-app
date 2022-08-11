import * as React from "react"
import Svg, { Circle } from "react-native-svg"

function OneBall(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={props.size || '100%'} height={props.size || '100%'} viewBox='0 0 19 19' {...props}>
      <Circle
        data-name="Ellipse 2"
        cx={9.5}
        cy={9.5}
        r={9.5}
        fill="#fe5e5e"
      />
    </Svg>
  )
}

export default OneBall;
