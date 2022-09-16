import * as React from 'react';

const SvgCheckOrange = (props) => (
  <svg width={51} height={50} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="url(#check-orange_svg__a)">
      <ellipse cx={25.497} cy={20.753} rx={21.497} ry={20.753} fill="url(#check-orange_svg__b)" />
      <path
        d="m23.522 26.158-5.638-5.338 1.532-1.468 4.106 4.003 8.282-8.006 1.532 1.468-9.814 9.34Z"
        fill="#fff"
      />
    </g>
    <defs>
      <linearGradient
        id="check-orange_svg__b"
        x1={25.497}
        y1={0}
        x2={25.497}
        y2={41.506}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF5E18" />
        <stop offset={1} stopColor="#FF7C44" />
      </linearGradient>
      <filter
        id="check-orange_svg__a"
        x={0}
        y={0}
        width={50.995}
        height={49.506}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_335_20996" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_335_20996" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default SvgCheckOrange;
