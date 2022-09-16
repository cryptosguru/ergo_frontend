import * as React from 'react';

const SvgThemeLightBig = (props) => (
  <svg width={81} height={38} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="url(#theme-light-big_svg__a)">
      <path
        d="M0 19C0 8.507 8.507 0 19 0h43c10.493 0 19 8.507 19 19s-8.507 19-19 19H19C8.507 38 0 29.493 0 19Z"
        fill="#F6F6F6"
      />
      <circle cx={27} cy={19} r={11} fill="url(#theme-light-big_svg__b)" />
    </g>
    <defs>
      <linearGradient
        id="theme-light-big_svg__b"
        x1={35.763}
        y1={8}
        x2={14.769}
        y2={9.76}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF7C44" />
        <stop offset={1} stopColor="#FF5E18" />
      </linearGradient>
      <filter
        id="theme-light-big_svg__a"
        x={0}
        y={0}
        width={81}
        height={42}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={4.5} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 0.595833 0 0 0 0 0.595833 0 0 0 0 0.595833 0 0 0 0.3 0" />
        <feBlend in2="shape" result="effect1_innerShadow_602_15056" />
      </filter>
    </defs>
  </svg>
);

export default SvgThemeLightBig;
