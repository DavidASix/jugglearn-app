import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

function TwoBall(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={props.size || '100%'} height={props.size || '100%'} viewBox="0 0 32 19" {...props}>
      <Path
        data-name="Path 41"
        d="M9.5 0A9.5 9.5 0 110 9.5 9.5 9.5 0 019.5 0z"
        fill="#fe5e5e"
      />
      <Circle
        data-name="Ellipse 3"
        cx={9.5}
        cy={9.5}
        r={9.5}
        transform="translate(13)"
        fill="#ffdd56"
      />
    </Svg>
  )
}

export default TwoBall;
