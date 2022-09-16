import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import { getIconComponentByName } from '../../utils/icons-map';

const cards = [
  {
    title: <FormattedMessageFixed defaultMessage="Mine it" id="components.getErg.MineIt.title" />,
    text: (
      <FormattedMessageFixed
        defaultMessage="Autolykos, an ASIC resistant & fairly mined Proof-of-Work algorithm friendly to common GPUs."
        id="components.getErg.MineIt.text"
      />
    ),
    icon: 'UsingErgMineIt',
    url: '/get-erg/#Mining',
  },
  {
    title: <FormattedMessageFixed defaultMessage="Buy it" id="components.getErg.BuyIt.title" />,
    text: (
      <FormattedMessageFixed
        defaultMessage="Available across popular centralized and decentralized exchanges."
        id="components.getErg.BuyIt.text"
      />
    ),
    icon: 'UsingErgBuyIt',
    url: '/get-erg/#Exchanges',
  },
  {
    title: <FormattedMessageFixed defaultMessage="Store it" id="components.getErg.StoreIt.title" />,
    text: (
      <FormattedMessageFixed
        defaultMessage="Simple and secure non-custodial wallets to keep your ERG safe."
        id="components.getErg.StoreIt.text"
      />
    ),
    icon: 'UsingErgStoreIt',
    url: '/get-erg/#Wallets',
  },
];

function FormattedMessageFixed(props: any) {
  return <FormattedMessage {...props} />;
}

type Props = {
  title: string;
};

export default function GetErgHero(props: Props) {
  return (
    <div
      id="GetErgHero"
      className="max-w-[1300px] mx-auto py-12 px-4 lg:py-16 lg:px-4 relative z-10"
    >
      <div className="flex flex-col xl:flex-row justify-between">
        <div className="lg:flex lg:flex-col lg:justify-end lg:mb-40">
          <p className="text-[#585858] dark:text-[#585858] mb-4 font-bold">UNSTOPPABLE DEFI</p>
          <h2 className="leading-none">
            <b>{props.title}</b>
          </h2>
          <p className="text-[#807e7e] dark:text-[#807e7e] mt-6 max-w-xs mr-4">
            There is a rich ecosystem budding on top of Ergo. Whether you are a developer, miner, or
            investor - we’ve got you covered.
          </p>
        </div>
        <div className="flex overflow-x-auto lg:space-x-4 space-x-8 mt-10 no-scrollbar pb-10">
          {cards.map((card: any, i: number) => (
            <Link key={i} href={card.url} passHref>
              <div className="cursor-pointer">
                <div className="h-[450px] flex dark:hidden items-end using-erg-card dark:using-erg-card p-4 mb-8">
                  {getIconComponentByName(card.icon + 'Light')}
                </div>
                <div className="hidden dark:flex h-[450px] items-end using-erg-card dark:using-erg-card p-4 mb-8">
                  {getIconComponentByName(card.icon)}
                </div>
                <p className="font-subtitle-3 mb-3">{card.title}</p>
                <p>{card.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
