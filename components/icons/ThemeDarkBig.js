import * as React from 'react';

const SvgThemeDarkBig = (props) => (
  <svg width={81} height={38} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="url(#theme-dark-big_svg__a)">
      <path
        d="M0 19C0 8.507 8.507 0 19 0h43c10.493 0 19 8.507 19 19s-8.507 19-19 19H19C8.507 38 0 29.493 0 19Z"
        fill="#141414"
      />
      <g filter="url(#theme-dark-big_svg__b)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M64.356 22.735C66.969 15.305 61.273 7.67 53.7 8.011 60.94 14.555 56.65 26.826 47 27.235c5.696 5.112 14.81 2.863 17.356-4.5Z"
          fill="url(#theme-dark-big_svg__c)"
        />
      </g>
    </g>
    <defs>
      <filter
        id="theme-dark-big_svg__a"
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
        <feColorMatrix values="0 0 0 0 0.708333 0 0 0 0 0.708333 0 0 0 0 0.708333 0 0 0 0.25 0" />
        <feBlend in2="shape" result="effect1_innerShadow_602_15054" />
      </filter>
      <filter
        id="theme-dark-big_svg__b"
        x={43}
        y={8}
        width={26}
        height={30}
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_602_15054" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_602_15054" result="shape" />
      </filter>
      <linearGradient
        id="theme-dark-big_svg__c"
        x1={63.169}
        y1={8}
        x2={45.953}
        y2={9.181}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF7C44" />
        <stop offset={1} stopColor="#FF5E18" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgThemeDarkBig;
