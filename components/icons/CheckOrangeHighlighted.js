import * as React from 'react';

const SvgCheckOrangeHighlighted = (props) => (
  <svg width={54} height={47} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <ellipse
      cx={21.497}
      cy={25.297}
      rx={21.497}
      ry={20.753}
      fill="url(#check-orange-highlighted_svg__a)"
    />
    <path
      d="m19.522 30.701-5.638-5.338 1.531-1.467 4.107 4.003 8.282-8.007 1.532 1.468-9.814 9.341Z"
      fill="#fff"
    />
    <path
      d="m46.576 10.032.336-.432 1.128-2.352.096-.96h.336l.12.96L49.72 9.6l.312.432 2.52-1.752-.312-.432-1.872-1.824-.888-.384.096-.336.936.216 2.592-.336.528-.168-1.008-3.024-.48.168-2.304 1.248-.648.72-.288-.24.48-.792.456-2.592V0h-3.072v.504l.48 2.592.48.792-.312.24-.648-.72-2.28-1.248-.504-.168L43 5.016l.504.168 2.592.336.96-.216.072.336-.864.384-1.896 1.824-.288.432 2.496 1.752Z"
      fill="#FF5E18"
    />
    <defs>
      <linearGradient
        id="check-orange-highlighted_svg__a"
        x1={21.497}
        y1={4.543}
        x2={21.497}
        y2={46.05}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF5E18" />
        <stop offset={1} stopColor="#FF7C44" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgCheckOrangeHighlighted;
