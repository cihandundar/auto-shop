import * as React from "react";

const Arrow = (props) => (
  <svg
    width={15}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.264 13.726c0-.288.108-.576.329-.795L9.022 7.5l-5.43-5.432a1.124 1.124 0 1 1 1.59-1.59l6.225 6.227c.439.44.439 1.15 0 1.59L5.183 14.52a1.124 1.124 0 0 1-1.919-.793Z"
      fill="#3F3C3D"
    />
  </svg>
);

export default Arrow;
