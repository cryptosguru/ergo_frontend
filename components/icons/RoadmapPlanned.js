import * as React from 'react';

const SvgRoadmapPlanned = (props) => (
  <svg width={29} height={28} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <ellipse cx={14.5} cy={14} rx={14.5} ry={14} fill="url(#roadmap-planned_svg__a)" />
    <path
      d="M19.506 12.554c-.083-.148-.246-.234-.447-.234h-4.48a.17.17 0 0 1-.166-.168V7.166c0-.424-.27-.445-.323-.445-.201 0-.315.192-.352.255L8.855 15.22c-.103.175-.115.36-.032.509.084.148.246.234.447.234h4.48a.17.17 0 0 1 .166.168v4.986c0 .424.27.445.323.445.201 0 .315-.192.352-.255l4.883-8.244c.103-.175.115-.36.032-.509Z"
      fill="#141414"
    />
    <defs>
      <linearGradient
        id="roadmap-planned_svg__a"
        x1={14.5}
        y1={0}
        x2={14.5}
        y2={28}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#807e7e" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgRoadmapPlanned;
