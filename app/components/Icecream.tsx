import * as React from "react"
const SvgComponent = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
    viewBox="0 0 48 48"
    {...props}
  >
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={4}>
      <path strokeLinejoin="round" d="M15.34 22.5 21 37l3 6 3-6 5.66-14.5" />
      <path d="M19 32h10" />
      <path
        strokeLinejoin="round"
        d="M24 3c-6 0-8 6-8 6s-6 2-6 7 5 7 5 7 3.5-2 9-2 9 2 9 2 5-2 5-7-6-7-6-7-2-6-8-6Z"
      />
    </g>
  </svg>
)
export default SvgComponent
