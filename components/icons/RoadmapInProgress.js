import * as React from 'react';

const SvgRoadmapInProgress = (props) => (
  <svg width={29} height={28} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <ellipse cx={14.5} cy={14} rx={14.5} ry={14} fill="url(#roadmap-in-progress_svg__a)" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.134 19.777a.723.723 0 0 0 .715-.715v-1.104a6.746 6.746 0 0 0 5.315 2.596 6.744 6.744 0 0 0 6.683-5.906l.047-.342h-1.43l-.031.264c-.389 2.596-2.642 4.554-5.269 4.554-1.865 0-3.605-1.01-4.569-2.595h1.787a.723.723 0 0 0 .715-.716.723.723 0 0 0-.714-.715H8.119c-.342 0-.7.218-.7.715v3.25c0 .388.327.714.715.714Zm.73-6.466.032-.264c.388-2.596 2.642-4.555 5.268-4.555 1.865 0 3.606 1.01 4.57 2.596h-1.772a.723.723 0 0 0-.715.715c0 .389.326.715.715.715h3.233c.295-.015.714-.202.714-.715V8.555a.723.723 0 0 0-.714-.715.723.723 0 0 0-.715.715v1.103a6.747 6.747 0 0 0-5.316-2.596 6.744 6.744 0 0 0-6.682 5.907l-.047.342h1.43Z"
      fill="#141414"
    />
    <defs>
      <linearGradient
        id="roadmap-in-progress_svg__a"
        x1={14.5}
        y1={0}
        x2={14.5}
        y2={28}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF5E18" />
        <stop offset={1} stopColor="#FF7C44" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgRoadmapInProgress;
