import * as React from 'react';

const SvgWalletCheck = (props) => (
  <svg width={33} height={32} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="url(#wallet-check_svg__a)">
      <ellipse cx={16.499} cy={13} rx={13.466} ry={13} fill="url(#wallet-check_svg__b)" />
      <path
        d="M15.262 16.384 11.73 13.04l.96-.919 2.572 2.508 5.188-5.016.96.92-6.148 5.851Z"
        fill="#fff"
      />
    </g>
    <defs>
      <linearGradient
        id="wallet-check_svg__b"
        x1={16.499}
        y1={0}
        x2={16.499}
        y2={26}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF5E18" />
        <stop offset={1} stopColor="#FF7C44" />
      </linearGradient>
      <filter
        id="wallet-check_svg__a"
        x={0.528}
        y={0}
        width={31.943}
        height={31.011}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={2.506} />
        <feGaussianBlur stdDeviation={1.253} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_162_1998" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_162_1998" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default SvgWalletCheck;
