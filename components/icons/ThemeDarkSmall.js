import * as React from 'react';

const SvgThemeDarkSmall = (props) => (
  <svg width={50} height={38} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="url(#theme-dark-small_svg__a)">
      <path
        d="M0 19C0 8.507 8.507 0 19 0h12c10.493 0 19 8.507 19 19s-8.507 19-19 19H19C8.507 38 0 29.493 0 19Z"
        fill="#141414"
      />
      <g filter="url(#theme-dark-small_svg__b)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M41.356 22.735C43.969 15.305 38.273 7.67 30.7 8.011 37.94 14.555 33.65 26.826 24 27.235c5.696 5.112 14.81 2.863 17.356-4.5Z"
          fill="url(#theme-dark-small_svg__c)"
        />
      </g>
    </g>
    <defs>
      <filter
        id="theme-dark-small_svg__a"
        x={0}
        y={0}
        width={50}
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
        <feBlend in2="shape" result="effect1_innerShadow_604_16290" />
      </filter>
      <filter
        id="theme-dark-small_svg__b"
        x={20}
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_604_16290" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_604_16290" result="shape" />
      </filter>
      <linearGradient
        id="theme-dark-small_svg__c"
        x1={40.169}
        y1={8}
        x2={22.953}
        y2={9.181}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF7C44" />
        <stop offset={1} stopColor="#FF5E18" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgThemeDarkSmall;
