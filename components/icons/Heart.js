import * as React from 'react';

const SvgHeart = (props) => (
  <svg width={20} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M0 5.4A5.4 5.4 0 0 1 5.5 0 5.991 5.991 0 0 1 10 2a5.991 5.991 0 0 1 4.5-2A5.4 5.4 0 0 1 20 5.4c0 5.356-6.379 9.4-10 12.6C6.387 14.773 0 10.76 0 5.4Z"
      fill="#FF5E18"
    />
  </svg>
);

export default SvgHeart;
