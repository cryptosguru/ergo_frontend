import * as React from 'react';

const SvgHighlights1 = (props) => (
  <svg width={562} height={562} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="url(#highlights-1_svg__a)">
      <circle
        cx={281.287}
        cy={280.374}
        r={184.826}
        transform="rotate(40.411 281.287 280.374)"
        fill="url(#highlights-1_svg__b)"
      />
    </g>
    <g filter="url(#highlights-1_svg__c)">
      <path
        d="M410.033 129.163a199.241 199.241 0 1 1-46.654-29.65L280.87 280.866l129.163-151.704Z"
        fill="url(#highlights-1_svg__d)"
        shapeRendering="crispEdges"
      />
    </g>
    <defs>
      <linearGradient
        id="highlights-1_svg__b"
        x1={146.755}
        y1={135.148}
        x2={445.478}
        y2={680.799}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EFEFEF" />
        <stop offset={1} stopColor="#292835" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="highlights-1_svg__d"
        x1={302.54}
        y1={524.219}
        x2={120.856}
        y2={81.25}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF5E18" />
        <stop offset={1} stopColor="#FF5E18" stopOpacity={0} />
      </linearGradient>
      <filter
        id="highlights-1_svg__a"
        x={96.457}
        y={95.545}
        width={369.659}
        height={369.659}
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
        <feOffset dy={2} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.11 0" />
        <feBlend in2="shape" result="effect1_innerShadow_705_20471" />
      </filter>
      <filter
        id="highlights-1_svg__c"
        x={77.627}
        y={81.625}
        width={406.485}
        height={406.485}
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_705_20471" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_705_20471" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={2} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
        <feBlend in2="shape" result="effect2_innerShadow_705_20471" />
      </filter>
    </defs>
  </svg>
);

export default SvgHighlights1;
