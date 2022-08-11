import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Courses(props) {
  return (
    <Svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox='0 0 23.283 26.081'
    >
      <Path
        d="M5.093 14.671h13.1c2.808 0 5.093-2.559 5.093-5.705S21 3.26 18.189 3.26H5.821A3.1 3.1 0 002.91 0 3.1 3.1 0 000 3.26a3.1 3.1 0 002.91 3.26 2.864 2.864 0 002.508-1.63h12.771a3.881 3.881 0 013.638 4.075 3.881 3.881 0 01-3.638 4.075H5.093C2.285 13.041 0 15.6 0 18.746s2.285 5.705 5.093 5.705h12.772a2.861 2.861 0 002.507 1.63 3.1 3.1 0 002.91-3.26 3.1 3.1 0 00-2.91-3.26 3.1 3.1 0 00-2.91 3.26H5.093a3.881 3.881 0 01-3.638-4.075 3.881 3.881 0 013.638-4.075z"
        fill={props.color || "#707070"}
      />
    </Svg>
  )
}

export default Courses
