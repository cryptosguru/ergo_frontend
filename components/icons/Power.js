import * as React from 'react';

const SvgPower = (props) => (
  <svg width={43} height={42} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <ellipse cx={21.497} cy={20.79} rx={21.497} ry={20.753} fill="url(#power_svg__a)" />
    <path
      d="M28.919 18.647c-.123-.22-.365-.346-.663-.346h-6.641a.251.251 0 0 1-.246-.25V10.66c0-.627-.4-.659-.48-.659-.297 0-.466.285-.522.378L13.13 22.6c-.153.259-.17.534-.048.754.124.22.365.346.663.346h6.641c.133 0 .246.114.246.25v7.392c0 .627.4.66.48.66.298 0 .466-.285.522-.38l7.238-12.22c.154-.259.17-.534.048-.754Z"
      fill="#141414"
    />
    <defs>
      <linearGradient
        id="power_svg__a"
        x1={21.497}
        y1={0.037}
        x2={21.497}
        y2={41.544}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#807e7e" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgPower;
