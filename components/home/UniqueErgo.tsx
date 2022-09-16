import { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import Button from '../Button';
import {
  UniqueErgo1,
  UniqueErgo1Light,
  UniqueErgo2,
  UniqueErgo2Light,
  UniqueErgo3,
  UniqueErgo3Light,
  UniqueErgo4,
  UniqueErgo4Light,
} from '../icons';

let cards = [
  {
    title: (
      <FormattedMessage
        defaultMessage="RESEARCH-LED AND REAL-WORLD FOCUSED"
        id={'components.uniqueErgo.card1.title'}
      />
    ),
    text: (
      <FormattedMessage
        defaultMessage="Ergo draws on ten years of blockchain development, complementing tried and tested principles with the best peer-reviewed academic research into cryptography, consensus models and digital currencies. We start with solid blockchain basics and implement new and powerful cryptography natively."
        id="components.uniqueErgo.card1.text"
      />
    ),
    url: '/discover/#DiscoverERG',
    buttoText: (
      <FormattedMessage defaultMessage="EXPLORE" id="components.uniqueErgo.card1.button" />
    ),
    icon: <UniqueErgo1 />,
    iconLight: <UniqueErgo1Light />,
  },
  {
    title: (
      <FormattedMessage defaultMessage="POWERFUL AND SAFE" id="components.uniqueErgo.card2.title" />
    ),
    text: (
      <FormattedMessage
        defaultMessage="Ergo provides superior support for real-world financial agreements. Ergo can support versatile dApps that run predictably, with known costs, and don’t have any of the dangers of unrestricted functionality. Ergo’s smart contracts allow us to execute wide-ranging tasks and can be Turing complete, but we always know in advance how much the code will cost and whether it will run successfully."
        id="components.uniqueErgo.card2.text"
      />
    ),
    url: '/discover/#FAQ',
    buttoText: (
      <FormattedMessage defaultMessage="EXPLORE" id="components.uniqueErgo.card2.button" />
    ),
    icon: <UniqueErgo2 />,
    iconLight: <UniqueErgo2Light />,
  },
  {
    title: (
      <FormattedMessage
        defaultMessage="INTELLIGENT AND STRAIGHTFORWARD"
        id="components.uniqueErgo.card3.title"
      />
    ),
    text: (
      <FormattedMessage
        defaultMessage="Sigma Protocols (Σ-Protocols) are the foundation of Ergo’s smart contracts. They allow for a class of efficient zero-knowledge protocols that enable us to implement sophisticated tasks that would otherwise be impossible, risky, or expensive. Welcome to self-sovereign application-level privacy: trustless scripts that can be used to access mixers or other functionality without any third parties required."
        id="components.uniqueErgo.card3.text"
      />
    ),
    url: '/blog/2022-02-01-decentralized-finance-and-optional-privacy-on-ergo/',
    buttoText: (
      <FormattedMessage defaultMessage="EXPLORE" id="components.uniqueErgo.card3.button" />
    ),
    icon: <UniqueErgo3 />,
    iconLight: <UniqueErgo3Light />,
  },
  {
    title: (
      <FormattedMessage
        defaultMessage="SECURE AND ACCESSIBLE"
        id="components.uniqueErgo.card4.title"
      />
    ),
    text: (
      <FormattedMessage
        defaultMessage="Ordinary users who do not run a full node should enjoy the same security benefits as miners. Non-Interactive Proofs of Proof-of-Work (NIPOPOWS) allow us to make and verify transactions with complete confidence without needing the storage, bandwidth and time required to download the full blockchain. As little as 1 MB of data is necessary, meaning you can use any device."
        id="components.uniqueErgo.card4.text"
      />
    ),
    url: 'https://docs.ergoplatform.com/tags/#nipopows',
    buttoText: (
      <FormattedMessage defaultMessage="EXPLORE" id="components.uniqueErgo.card4.button" />
    ),
    icon: <UniqueErgo4 />,
    iconLight: <UniqueErgo4Light />,
  },
];

export default function UniqueErgo() {
  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    let activeCard = cards[0];

    cards.forEach((card) => {
      card.addEventListener('click', () => {
        activeCard.classList.remove('active');
        activeCard = card;
        activeCard.classList.add('active');
      });
    });
  }, []);

  return (
    <div id="UniqueErgo" className="mt-28 ">
      <div className="text-center">
        <p className="font-bold text-[#585858] dark:text-[#807e7e] text-[16px] lg:text-[20px]">
          <FormattedMessage
            defaultMessage="WHAT MAKES ERGO UNIQUE"
            id="components.uniqueErgo.title"
          />
        </p>
      </div>
      <div className="relative z-20 overflow-x-auto no-scrollbar">
        <div className="antialiased flex items-center justify-center my-8 min-w-[1000px]">
          <div className="flex h-[638px] items-stretch min-w-md overflow-hidden w-full">
            {cards.map((card, index) => (
              <div
                key={index}
                className={
                  'bg-center bg-cover bg-[#FCFCFC] dark:bg-brand-black card cursor-pointer flex-grow min-w-14 overflow-hidden relative transition-base border-[1px] border-[#625d5d] dark:border-[#2A2A2A]' +
                  (index === 0 ? ' active' : '')
                }
              >
                <div className="absolute top-16 lg:top-8 flex label mb-3 ml-4 lg:ml-16 transition-base z-20 text-[16px] lg:text-[24px] flex-col">
                  <div className="hidden dark:block">{card.icon}</div>
                  <div className="dark:hidden">{card.iconLight}</div>
                  <div className="mt-8 max-w-[300px]">{card.title}</div>
                </div>
                <div className="absolute bottom-0 from-transparent h-1/2 inset-x-0 temphide hidden to-black transform transition-base translate-y-1/2 z-10 text-[#585858] dark:text-[#807e7e] max-w-xs lg:max-w-sm ml-6 lg:ml-16">
                  <div>{card.text}</div>
                </div>
                {card.url !== undefined ? (
                  <div className="absolute bottom-2 from-transparent h-auto inset-x-0 temphide hidden to-black transform transition-base translate-y-1/2 z-10 text-[#585858] dark:text-[#807e7e] max-w-xs lg:max-w-sm ml-6 lg:ml-16">
                    <div className="-ml-4 mt-12 sm:mt-10 lg:mt-16">
                      <Button
                        text={card.buttoText}
                        url={card.url}
                        newTab={true}
                        underline={true}
                        textColor="brand-orange"
                        background={false}
                        icon="ArrowRight"
                        iconColor="orange"
                      />
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
