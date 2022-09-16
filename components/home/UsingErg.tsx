import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import { getIconComponentByName } from '../../utils/icons-map';

const cards = [
  {
    title: <FormattedMessageFixed defaultMessage="Mine it" id="components.usingErg.MineIt.title" />,
    text: (
      <FormattedMessageFixed
        defaultMessage="Autolykos, an ASIC resistant & fairly mined Proof-of-Work algorithm friendly to common GPUs."
        id="components.usingErg.MineIt.text"
      />
    ),
    icon: 'UsingErgMineIt',
    url: '/get-erg/#Mining',
  },
  {
    title: <FormattedMessageFixed defaultMessage="Buy it" id="components.usingErg.BuyIt.title" />,
    text: (
      <FormattedMessageFixed
        defaultMessage="Available across popular centralized and decentralized exchanges."
        id="components.usingErg.BuyIt.text"
      />
    ),
    icon: 'UsingErgBuyIt',
    url: '/get-erg/#Exchanges',
  },
  {
    title: (
      <FormattedMessageFixed defaultMessage="Store it" id="components.usingErg.StoreIt.title" />
    ),
    text: (
      <FormattedMessageFixed
        defaultMessage="Simple and secure non-custodial wallets to keep your ERG safe."
        id="components.usingErg.StoreIt.text"
      />
    ),
    icon: 'UsingErgStoreIt',
    url: '/get-erg/#Wallets',
  },
];

function FormattedMessageFixed(props: any) {
  return <FormattedMessage {...props} />;
}

export default function UsingErg() {
  return (
    <div
      id="UsingErg"
      className="max-w-[1300px] mx-auto py-12 px-4 lg:py-16 lg:px-4 relative"
      style={{ zIndex: 13 }}
    >
      <div className="flex flex-col xl:flex-row justify-between">
        <div className="lg:flex lg:flex-col lg:justify-end lg:mb-44">
          <p className="text-[#585858] dark:text-[#585858] mb-4 font-bold">
            <FormattedMessage
              defaultMessage={'UNSTOPPABLE DEFI'}
              id="components.usingErg.subtitle"
            ></FormattedMessage>
          </p>
          <h2 className="leading-none">
            <b>
              <FormattedMessage
                defaultMessage={'GET ERG'}
                id="components.usingErg.title"
              ></FormattedMessage>
            </b>
          </h2>
          <p className="text-[#807e7e] dark:text-[#807e7e] mt-6 max-w-xs mr-4">
            <FormattedMessage
              defaultMessage="There is a rich ecosystem budding on top of Ergo. Whether you are a developer, miner, or
              investor - we’ve got you covered."
              id="components.usingErg.description"
            ></FormattedMessage>
          </p>
        </div>
        <div className="flex overflow-x-auto lg:space-x-4 space-x-8 mt-10 no-scrollbar pb-10">
          {cards.map((card: any, i: number) => (
            <Link key={i} href={card.url} passHref>
              <div className="cursor-pointer z-20">
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
