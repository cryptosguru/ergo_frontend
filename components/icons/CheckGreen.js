import * as React from 'react';

const SvgCheckGreen = (props) => (
  <svg width={43} height={42} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <ellipse cx={21.497} cy={20.778} rx={21.497} ry={20.753} fill="url(#check-green_svg__a)" />
    <path
      d="m19.522 26.183-5.638-5.338 1.531-1.468 4.107 4.003 8.282-8.006 1.532 1.468-9.814 9.34Z"
      fill="#141414"
    />
    <defs>
      <linearGradient
        id="check-green_svg__a"
        x1={21.497}
        y1={0.025}
        x2={21.497}
        y2={41.531}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00C68A" />
        <stop offset={1} stopColor="#98FFD4" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgCheckGreen;
