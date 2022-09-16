import * as React from 'react';

const SvgBlogLink = (props) => (
  <svg width={50} height={51} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M27.058 23.253a5.823 5.823 0 0 0-8.234 0l-4.118 4.117a5.823 5.823 0 1 0 8.235 8.235L25 33.547"
      stroke="#FF5E18"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.941 27.37a5.823 5.823 0 0 0 8.235 0l4.118-4.118a5.824 5.824 0 0 0-8.235-8.235L25 17.075"
      stroke="#FF5E18"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x={1} y={1.311} width={48} height={48} rx={24} stroke="#FF5E18" strokeWidth={2} />
  </svg>
);

export default SvgBlogLink;
