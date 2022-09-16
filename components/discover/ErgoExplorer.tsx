import Link from 'next/link';
import { useIntl } from 'react-intl';
import { getIconComponentByName } from '../../utils/icons-map';

export default function Explore() {
  const intl = useIntl();
  const button1Text = intl.formatMessage({
    id: 'components.ergoExplorer.button1',
    defaultMessage: 'EXPLORER',
  });

  const button2Text = intl.formatMessage({
    id: 'components.ergoExplorer.button2',
    defaultMessage: 'ERGO.WATCH',
  });

  return (
    <div id="Explore" className="max-w-[1300px] mx-auto p-4 mt-40 relative z-10">
      <p className="text-[#585858] dark:text-[#585858] mb-4 xl:ml-60">
        DIVE INTO THE ERGO SEA OF TRANSACTIONS
      </p>
      <h1 className="leading-tight xl:ml-60">
        <b>Explore</b>
      </h1>
      <p className="max-w-xs text-[#807e7e] dark:text-[#807e7e] mt-6 xl:mt-12 xl:ml-[400px] xl:max-w-lg">
        The Ergo Explorer is your interface with the blockchain. Watch every transaction made in
        real-time. Or, view community curated metrics on ergo.watch.
      </p>
      <Link href="https://explorer.ergoplatform.com/" passHref>
        <a target="_blank" rel="noopener noreferrer">
          <button
            type="submit"
            className="py-1 px-4 inline-flex items-center whitespace-nowrap btn rounded-full text-black font-vinila-extended text-[14px] md:text-[16px] bg-brand-orange mt-6 xl:ml-[400px]"
          >
            <span>{button1Text}</span>
            <span className="w-4 h-4 ml-2">{getIconComponentByName('ArrowRightBlack')}</span>
          </button>
        </a>
      </Link>
      <Link href="https://ergo.watch/" passHref>
        <a target="_blank" rel="noopener noreferrer">
          <button
            type="submit"
            className="py-1 px-4 inline-flex items-center whitespace-nowrap btn rounded-full text-black font-vinila-extended text-[14px] md:text-[16px] bg-brand-orange mt-6 xl:ml-[10px]"
          >
            <span>{button2Text}</span>
            <span className="w-4 h-4 ml-2">{getIconComponentByName('ArrowRightBlack')}</span>
          </button>
        </a>
      </Link>
    </div>
  );
}
