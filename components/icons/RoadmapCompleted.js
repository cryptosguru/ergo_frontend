import * as React from 'react';

const SvgRoadmapCompleted = (props) => (
  <svg width={25} height={25} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <ellipse cx={12.429} cy={12.5} rx={12.429} ry={12} fill="url(#roadmap-completed_svg__a)" />
    <path
      d="m11.286 15.625-3.26-3.086.886-.85 2.374 2.316 4.789-4.63.885.849-5.674 5.401Z"
      fill="#141414"
    />
    <defs>
      <linearGradient
        id="roadmap-completed_svg__a"
        x1={12.429}
        y1={0.5}
        x2={12.429}
        y2={24.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00C68A" />
        <stop offset={1} stopColor="#98FFD4" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgRoadmapCompleted;
