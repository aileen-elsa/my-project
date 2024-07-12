import * as React from "react"
const SvgComponent = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
    viewBox="0 0 1024 768"
    {...props}
  >
    <path
      fill="currentColor"
      d="M992 640H32q-13 0-22.5-9.5T0 608q0-188 116.5-320.5T416 128q13 0 22.5-9.5T448 96t-9.5-22.5T416 64t-22.5-9.5T384 32t9.5-22.5T416 0h192q13 0 22.5 9.5T640 32t-9.5 22.5T608 64t-22.5 9.5T576 96t9.5 22.5T608 128q183 27 299.5 159.5T1024 608q0 13-9.5 22.5T992 640zM32 704h960q13 0 22.5 9.5t9.5 22.5-9.5 22.5T992 768H32q-13 0-22.5-9.5T0 736t9.5-22.5T32 704z"
    />
  </svg>
)
export default SvgComponent
