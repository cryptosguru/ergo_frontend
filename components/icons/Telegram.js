import * as React from 'react';

const SvgTelegram = (props) => (
  <svg
    width={39}
    height={40}
    className="fill-current text-black dark:text-white"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19.375.625C8.672.625 0 9.297 0 20s8.672 19.375 19.375 19.375S38.75 30.703 38.75 20 30.078.625 19.375.625Zm9.453 13.281-3.125 15c-.234 1.094-.86 1.328-1.797.86l-4.843-3.594-2.344 2.265c-.235.235-.469.47-.938.47l.313-4.923 8.984-8.125c.39-.312-.078-.546-.625-.234L13.36 22.656l-4.765-1.484c-1.016-.313-1.016-1.094.234-1.563L27.5 12.422c.86-.313 1.64.234 1.328 1.484Z" />
  </svg>
);

export default SvgTelegram;
