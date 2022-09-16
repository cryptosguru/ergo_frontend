import * as React from 'react';

const SvgThemeLightSmall = (props) => (
  <svg width={50} height={34} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="url(#theme-light-small_svg__a)">
      <path
        d="M0 17C0 7.611 7.611 0 17 0h16c9.389 0 17 7.611 17 17s-7.611 17-17 17H17C7.611 34 0 26.389 0 17Z"
        fill="#F6F6F6"
      />
      <circle cx={17} cy={17} r={9} fill="url(#theme-light-small_svg__b)" />
    </g>
    <defs>
      <linearGradient
        id="theme-light-small_svg__b"
        x1={24.169}
        y1={8}
        x2={6.993}
        y2={9.44}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF7C44" />
        <stop offset={1} stopColor="#FF5E18" />
      </linearGradient>
      <filter
        id="theme-light-small_svg__a"
        x={0}
        y={0}
        width={50}
        height={38}
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
        <feBlend in2="shape" result="effect1_innerShadow_604_16292" />
      </filter>
    </defs>
  </svg>
);

export default SvgThemeLightSmall;
