import * as React from 'react';

const SvgMenuOpen = (props) => (
  <svg
    width={50}
    height={25}
    xmlns="http://www.w3.org/2000/svg"
    className="fill-current text-black dark:text-white"
    {...props}
  >
    <path d="M0 0h50v3H0zM0 11h50v3H0zM0 22h50v3H0z" />
  </svg>
);

export default SvgMenuOpen;
