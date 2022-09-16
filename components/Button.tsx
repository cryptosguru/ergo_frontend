import Link from 'next/link';
import { getIconComponentByName } from '../utils/icons-map';
import React from 'react';

type Props = {
  text: React.ReactNode;
  url: string;
  icon?: string;
  textColor?: string;
  newTab?: boolean;
  underline?: boolean;
  background?: boolean;
  iconColor?: string;
  customClass?: string;
};

export default function Button({
  text,
  url,
  icon = 'none',
  textColor,
  newTab = false,
  underline = false,
  background = true,
  iconColor = 'black',
  customClass = '',
}: Props) {
  var className =
    `py-1 px-4 inline-flex items-center whitespace-nowrap btn rounded-full text-${textColor} font-vinila-extended text-[14px] md:text-[16px] bg-brand-orange` +
    customClass;
  var target = '_self';

  if (underline == true) {
    className += ' underline';
  }

  if (newTab == true) {
    target = '_blank';
  }

  if (background == false) {
    className += ' bg-transparent';
  }

  return (
    <>
      {url ? (
        <Link href={url}>
          <a target={target}>
            <button className={className}>
              <span>{text}</span>
              {icon == 'none' ? (
                ``
              ) : (
                <span className="w-4 h-4 ml-2">
                  {getIconComponentByName(
                    'ArrowRight' + iconColor.charAt(0).toUpperCase() + iconColor.slice(1),
                  )}
                </span>
              )}
            </button>
          </a>
        </Link>
      ) : null}
    </>
  );
}
