import * as React from "react"
import Svg, { G, Path, Circle } from "react-native-svg"


function Profile(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 26.7" height={props.size || '100%'} width={props.size || '100%'} {...props}>
      <Path fill="none" d="M-4.8-3.3h33.6v33.6H-4.8z" />
      <Path
        d="M12 13.5c3.1 0 5.6-2.5 5.6-5.6S15.1 2.3 12 2.3 6.4 4.8 6.4 7.9s2.5 5.6 5.6 5.6zm0-8.4c1.5 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8-2.8-1.3-2.8-2.8 1.3-2.8 2.8-2.8zm0 9.8C8.3 14.9.8 16.8.8 20.5v2.8c0 .8.6 1.4 1.4 1.4h19.6c.8 0 1.4-.6 1.4-1.4v-2.8c0-3.8-7.5-5.6-11.2-5.6zm8.4 7H3.6v-1.4c.3-1 4.6-2.8 8.4-2.8s8.1 1.8 8.4 2.8v1.4z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill={props.color || "#1d1d1d"}
      />
      <Circle cx={4.7} cy={16.3} r={2.4} fill="#e21b1b" />
      <Circle cx={19.4} cy={10.7} r={2.1} fill="#e0cd1e" />
      <Circle cx={7.1} cy={5.1} r={2.1} fill="#1e64e0" />
    </Svg>
  )
}

export default Profile;
