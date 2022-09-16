import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri';
import { useTheme } from 'next-themes';
import classNames from 'classnames';
import { useLoaded } from '../../utils/useLoaded';

export default function DarkModeSwitch() {
  const { theme, setTheme } = useTheme();
  const loaded = useLoaded();

  useEffect(() => {
    if (window.localStorage.getItem('theme') === 'light') {
      return setTheme('light');
    } else {
      return setTheme('dark');
    }
  }, []);

  const toggleSwitch = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const spring = {
    type: 'tween',
    stiffness: 700,
    damping: 30,
  };

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      window.localStorage.setItem('theme', 'light');
    }

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      window.localStorage.setItem('theme', 'dark');
    }
  }, [theme]);

  return (
    <div
      onClick={toggleSwitch}
      className={classNames(
        `flex-start flex h-[40px] w-[80px] rounded-[50px] bg-zinc-100  shadow-inner hover:cursor-pointer dark:bg-black `,
        {
          'place-content-end': loaded && theme === 'light',
        },
      )}
    >
      <motion.div
        className="flex h-[40px] w-[40px] items-center justify-center rounded-full"
        layout
        transition={spring}
      >
        <motion.div>
          {loaded && theme === 'light' ? (
            <RiSunFill className="h-6 w-6 text-orange-500" />
          ) : (
            <RiMoonClearFill className="h-6 w-6 text-slate-200" />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
