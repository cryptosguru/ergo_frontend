import * as React from 'react';

const SvgWalletX = (props) => (
  <svg width={44} height={42} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M42.497 21c0 10.876-9.144 19.752-20.498 19.752-11.353 0-20.497-8.876-20.497-19.753 0-10.876 9.143-19.753 20.497-19.753S42.497 10.123 42.497 21Z"
      // stroke="#fff"
      strokeWidth={2}
      className="stroke-black dark:stroke-white"
    />
    <path
      d="m28.495 16.292-1.597-1.542-5.009 4.906-5.009-4.906-1.597 1.542 5.082 4.835-5.082 4.836 1.597 1.541 5.01-4.905 5.008 4.905 1.597-1.541-5.081-4.836 5.081-4.835Z"
      // fill="#fff"
      className="fill-black dark:fill-white"
    />
  </svg>
);

export default SvgWalletX;
