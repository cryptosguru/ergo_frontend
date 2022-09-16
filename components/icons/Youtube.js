import * as React from 'react';

const SvgYoutube = (props) => (
  <svg
    width={45}
    height={40}
    className="fill-current text-black dark:text-white"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M42.89 9.766c-.468-1.875-1.953-3.36-3.75-3.829C35.782 5 22.5 5 22.5 5S9.14 5 5.781 5.938C3.984 6.405 2.5 7.89 2.031 9.765c-.937 3.28-.937 10.312-.937 10.312s0 6.953.937 10.313c.469 1.875 1.953 3.28 3.75 3.75C9.141 35 22.5 35 22.5 35s13.281 0 16.64-.86c1.797-.468 3.282-1.874 3.75-3.75.938-3.359.938-10.312.938-10.312s0-7.031-.937-10.312Zm-24.765 16.64V13.75l11.094 6.328-11.094 6.328Z" />
  </svg>
);

export default SvgYoutube;
