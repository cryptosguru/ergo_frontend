import { Popover, Transition } from '@headlessui/react';
import {
  LogoWithText,
  ThemeLightBig,
  ThemeDarkBig,
  ThemeLightSmall,
  ThemeDarkSmall,
  LogoWithTextWhite,
} from './icons';
import Button from './Button';
import LanguageSwitcher from './LanguageSwitcher';
import { FormattedMessage, useIntl } from 'react-intl';
import { getIconComponentByName } from '../utils/icons-map';
import { useTheme } from 'next-themes';
import { Fragment } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DarkModeSwitch from './darkModeSwitcher/DarkModeSwitcher';
import Search from './Search';

function Navigation({ enableLanguages = true }) {
  const { theme, setTheme } = useTheme();
  const { pathname } = useRouter();
  const intl = useIntl();
  const ergoCommunity = intl.formatMessage({
    id: 'navigation.ergoCommunity',
    defaultMessage: 'ERGO COMMUNITY',
  });
  const getErg = intl.formatMessage({
    id: 'navigation.getErg',
    defaultMessage: 'GET ERG',
  });
  const discover = intl.formatMessage({
    id: 'navigation.discover',
    defaultMessage: 'DISCOVER',
  });
  const ecosystem = intl.formatMessage({
    id: 'navigation.ecosystem',
    defaultMessage: 'ECOSYSTEM',
  });
  return (
    <Popover className="max-w-[1300px] mx-auto p-4">
      <div className="flex mx-0 mt-2 mb-10 lg:my-10 md:mx-5">
        <div className="my-auto flex-grow z-10">
          <Link href="/" passHref>
            <button className="flex justify-center align-center">
              <LogoWithText viewBox="0 0 213 82" className="w-24 lg:w-32" />
            </button>
          </Link>
        </div>
        <div className="hidden lg:block my-auto flex-grow" style={{ zIndex: 12 }}>
          <Button
            text={ergoCommunity}
            url="/community"
            background={false}
            underline={pathname == '/community'}
            customClass=" decoration-brand-orange dark:decoration-brand-orange underline-offset-2"
          />
          <Button
            text={getErg}
            url="/get-erg"
            background={true}
            underline={pathname == '/get-erg'}
            customClass=" decoration-black dark:decoration-white underline-offset-2"
          />
          <Button
            text={discover}
            url="/discover"
            background={false}
            underline={pathname == '/discover'}
            customClass=" decoration-brand-orange dark:decoration-brand-orange underline-offset-2"
          />
          <Button
            text={ecosystem}
            url="/ecosystem"
            background={false}
            underline={pathname == '/ecosystem'}
            customClass=" decoration-brand-orange dark:decoration-brand-orange underline-offset-2"
          />
        </div>
        <div className="inline-flex" style={{ zIndex: 12 }}>
          <div className="my-auto hidden xs:block">
            {enableLanguages ? <LanguageSwitcher /> : null}{' '}
          </div>
          <div className="my-auto ml-5 lg:ml-10">
            <DarkModeSwitch />
          </div>
          <div className="my-auto ml-5 lg:ml-10 z-40">
            <Popover.Button className="focus:outline-none">
              {getIconComponentByName('MenuOpen')}
            </Popover.Button>
          </div>
        </div>
      </div>
      <Transition
        as={Fragment}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Popover.Panel className="fixed overflow-auto inset-0 bg-brand-orange dark:bg-brand-black z-50">
          <div className="max-w-[1300px] mx-auto p-4">
            <div className="flex mx-0 mt-2 mb-10 lg:my-10 md:mx-5">
              <div className="my-auto flex-grow">
                <Link href="/" passHref>
                  <button className="flex justify-center align-center">
                    <LogoWithTextWhite viewBox="0 0 213 82" className="w-24 lg:w-32" />
                  </button>
                </Link>
              </div>
              <div className="inline-flex">
                <div className="my-auto text-white hidden xs:block">
                  {enableLanguages ? <LanguageSwitcher color="white" /> : null}{' '}
                </div>
                <div className="my-auto ml-5 lg:ml-10">
                  <DarkModeSwitch />
                </div>
                <div className="my-auto ml-5 lg:ml-10">
                  <Popover.Button>{getIconComponentByName('MenuClose')}</Popover.Button>
                </div>
              </div>
            </div>
            <Search />
            <div className="mx-0 md:mx-4 mt-16 grid grid-cols-1 md:grid-cols-4 text-white">
              <div>
                <Link href="/community" passHref>
                  <a>
                    <h3 className="font-button mt-4 mb-10">
                      <FormattedMessage defaultMessage="COMMUNITY" id="footer.community.title" />
                    </h3>
                  </a>
                </Link>

                <ul className="hidden md:block">
                  <li className="mb-2">
                    <Link href="/community/#JoinUs" passHref>
                      <a>
                        <FormattedMessage
                          defaultMessage="Join our channels"
                          id="footer.community.1"
                        />
                      </a>
                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link href="/community/#Sigmanauts" passHref>
                      <a>
                        <FormattedMessage defaultMessage="Sigmanauts" id="footer.community.2" />
                      </a>
                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link href="/community/#Contribute" passHref>
                      <a>
                        <FormattedMessage
                          defaultMessage="Contribute to Ergo"
                          id="footer.community.3"
                        />
                      </a>
                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link href="/community/#HallOfFame" passHref>
                      <a>
                        <FormattedMessage defaultMessage="Hall of Fame" id="footer.community.4" />
                      </a>
                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link href="/community/#Foundation" passHref>
                      <a>
                        <FormattedMessage
                          defaultMessage="Ergo Foundation"
                          id="footer.community.5"
                        />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <Link href="/get-erg" passHref>
                  <a>
                    <h3 className="font-button mt-4 mb-10">
                      <FormattedMessage defaultMessage="GET ERG" id="footer.getErg.title" />
                    </h3>
                  </a>
                </Link>

                <ul className="hidden md:block">
                  <li className="mb-2">
                    <Link href="/get-erg/#Mining" passHref>
                      <a>
                        <FormattedMessage defaultMessage="Mining" id="footer.getErg.1" />
                      </a>
                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link href="/get-erg#MiningCalculator" passHref>
                      <a>
                        <FormattedMessage defaultMessage="Mining Calculator" id="footer.getErg.2" />
                      </a>
                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link href="/get-erg/#Wallets" passHref>
                      <a>
                        <FormattedMessage defaultMessage="Wallets" id="footer.getErg.3" />
                      </a>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/get-erg/#Exchanges" passHref>
                      <a>
                        <FormattedMessage defaultMessage="Exchanges" id="footer.getErg.4" />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <Link href="/discover" passHref>
                  <a>
                    <h3 className="font-button mt-4 mb-10">
                      <FormattedMessage defaultMessage="DISCOVER" id="footer.discover.title" />
                    </h3>
                  </a>
                </Link>
                <ul className="hidden md:block">
                  <li className="mb-2">
                    <Link href="/discover/#DiscoverERG" passHref>
                      <a>
                        <FormattedMessage
                          defaultMessage="Software Releases"
                          id="footer.discover.1"
                        />
                      </a>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/discover/#GrantsAndBounties" passHref>
                      <a>
                        <FormattedMessage
                          defaultMessage="Grants & Bounties"
                          id="footer.discover.2"
                        />
                      </a>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/discover/#FAQ">
                      <a>
                        <FormattedMessage defaultMessage="FAQ" id="footer.discover.3" />
                      </a>
                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link href="/discover/#Explore">
                      <a>
                        <FormattedMessage defaultMessage="Explore" id="footer.discover.4" />
                      </a>
                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link href="/discover/#Documents">
                      <a>
                        <FormattedMessage defaultMessage="Documents" id="footer.discover.5" />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <Link href="/ecosystem">
                  <a>
                    <h3 className="font-button mt-4 mb-8 md:mb-10">
                      <FormattedMessage defaultMessage="ECOSYSTEM" id="footer.ecosystem.title" />
                    </h3>
                  </a>
                </Link>
                <ul className="hidden md:block">
                  <li className="mb-2">
                    <Link href="/ecosystem/#dApps">
                      <a>
                        <FormattedMessage defaultMessage="DApps" id="footer.ecosystem.1" />
                      </a>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/ecosystem/#Roadmap">
                      <a>
                        <FormattedMessage defaultMessage="Roadmap" id="footer.ecosystem.2" />
                      </a>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/ecosystem/#Wiki">
                      <a>
                        <FormattedMessage defaultMessage="Wiki" id="footer.ecosystem.3" />
                      </a>
                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link href="/ecosystem/#Favorites">
                      <a>
                        <FormattedMessage defaultMessage="Ergo Raffle" id="footer.ecosystem.4" />
                      </a>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/ecosystem/#ChangingTheWorld">
                      <a>
                        <FormattedMessage defaultMessage="Videocasts" id="footer.ecosystem.5" />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 w-80 hidden md:block">
                <p className="font-subtitle-2">
                  <FormattedMessage defaultMessage="More content?" id="navigation.moreContent" />
                </p>
                <p className="font-subtitle-2">
                  <FormattedMessage defaultMessage="We got it!" id="footer.weGotIt" />
                </p>
              </div>
            </div>
            <div className="mx-0 md:mx-4 text-white md:flex">
              <div className="my-6 flex-grow md:flex-grow">
                <ul className="md:inline-flex">
                  <li>
                    <Link href="/blog" passHref>
                      <a>
                        <h3 className="font-button mt-4 mb-14 mr-20">
                          <FormattedMessage defaultMessage="BLOG" id="footer.blog.title" />
                        </h3>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/news" passHref>
                      <a>
                        <h3 className="font-button mt-4 mb-14 mr-20">
                          <FormattedMessage defaultMessage="NEWS" id="footer.news.title" />
                        </h3>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="my-6 dark">
                <div className="grid overflow-hidden grid-cols-3 gap-6 text-red md:grid-cols-9">
                  <div className="box mx-auto my-auto">
                    <a href="https://sigmaverse.io" target="_blank" rel="noreferrer">
                      {getIconComponentByName('Sigmaverse')}
                    </a>
                  </div>
                  <div className="box mx-auto my-auto">
                    <Link href="/ecosystem/#Wiki" passHref>
                      <a>{getIconComponentByName('ErgoWiki')}</a>
                    </Link>
                  </div>
                  <div className="box mx-auto my-auto">
                    <a href="https://github.com/ergoplatform" target="_blank" rel="noreferrer">
                      {getIconComponentByName('Github')}
                    </a>
                  </div>
                  <div className="box mx-auto my-auto">
                    <a href="https://twitter.com/ergoplatformorg" target="_blank" rel="noreferrer">
                      {getIconComponentByName('Twitter')}
                    </a>
                  </div>
                  <div className="box mx-auto my-auto">
                    <a
                      href="https://www.youtube.com/c/ErgoPlatform"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {getIconComponentByName('Youtube')}
                    </a>
                  </div>
                  <div className="box mx-auto my-auto">
                    <a href="https://t.me/Ergo_Chats" target="_blank" rel="noreferrer">
                      {getIconComponentByName('Telegram')}
                    </a>
                  </div>
                  <div className="box mx-auto my-auto">
                    <a href="https://discord.gg/RC8M4Bkgsy" target="_blank" rel="noreferrer">
                      {getIconComponentByName('Discord')}
                    </a>
                  </div>
                  <div className="box mx-auto my-auto">
                    <a href="https://reddit.com/r/ergonauts" target="_blank" rel="noreferrer">
                      {getIconComponentByName('Reddit')}
                    </a>
                  </div>
                  <div className="box mx-auto my-auto">
                    <a href="https://www.ergoforum.org/" target="_blank" rel="noreferrer">
                      {getIconComponentByName('Discourse')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default Navigation;
