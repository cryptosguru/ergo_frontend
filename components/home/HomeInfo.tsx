import { FormattedMessage } from 'react-intl';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

type Props = {
  blockReward: number;
  circulatingSupply: number;
  transactionPerDay: number;
  hashRate: number;
};

export default function HomeInfo({
  blockReward = 2,
  circulatingSupply = 46166151,
  transactionPerDay = 6266,
  hashRate = 20.19,
}: Props) {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  hashRate = hashRate / 1000000000000;
  circulatingSupply = circulatingSupply / 1000000000;

  return (
    <div id="HomeInfo" ref={ref} className="relative z-10">
      <div className="hidden md:flex mt-30 justify-end">
        <div className="mx-4 md:flex flex-row bg-white md:pr-18 lg:pr-20 xl:pr-36 rounded-l-xl md:mx-0 homeInfo-shadow">
          <div className="mx-8 my-4 text-center">
            <b className="text-brand-orange dark:text-brand-orange">
              <FormattedMessage
                defaultMessage="BLOCK REWARD"
                id="components.homeInfo.blockReward"
              />
            </b>
            <p className="font-vinila-extended text-[20px] text-black dark:text-black">
              {inView && <CountUp separator="," start={0} end={blockReward} />}
            </p>
          </div>
          <div className="verticalLine h-14 my-auto"></div>
          <div className="mx-8 my-4 text-center">
            <b className="text-brand-orange dark:text-brand-orange">
              <FormattedMessage
                defaultMessage="CIRCULATING SUPPLY"
                id="components.homeInfo.circulatingSupply"
              />
            </b>
            <p className="font-vinila-extended text-[20px] text-black dark:text-black">
              {inView && <CountUp separator="," start={10000000} end={circulatingSupply} />}{' '}
            </p>
          </div>
          <div className="verticalLine h-14 my-auto"></div>
          <div className="mx-8 my-4 text-center">
            <b className="text-brand-orange dark:text-brand-orange">
              <FormattedMessage
                defaultMessage="TRANSACTIONS PER DAY"
                id="components.homeInfo.transactionPerDay"
              />
            </b>
            <p className="font-vinila-extended text-[20px] text-black dark:text-black">
              {inView && <CountUp separator="," start={1000} end={transactionPerDay} />}
            </p>
          </div>
          <div className="verticalLine h-14 my-auto"></div>
          <div className="mx-8 my-4 text-center">
            <b className="text-brand-orange dark:text-brand-orange">
              <FormattedMessage defaultMessage="HASH RATE" id="components.homeInfo.hashRate" />
            </b>
            <p className="font-vinila-extended text-[20px] text-black dark:text-black">
              {inView && <CountUp separator="," decimals={2} start={10} end={hashRate} />} TH/s
            </p>
          </div>
        </div>
      </div>

      <div className="md:hidden mt-36 justify-end">
        <div className="bg-white mx-4 rounded-xl py-1 homeInfo-shadow">
          <div className="mx-8 my-6">
            <b className="text-brand-orange dark:text-brand-orange">
              <FormattedMessage
                defaultMessage="BLOCK REWARD"
                id="components.homeInfo.blockReward"
              />
            </b>
            <p className="font-vinila-extended text-[20px] text-black dark:text-black">
              {inView && <CountUp separator="," start={0} end={blockReward} />}
            </p>
          </div>
          <div className="horizontallLine"></div>
          <div className="mx-8 my-6">
            <b className="text-brand-orange dark:text-brand-orange">
              <FormattedMessage
                defaultMessage="CIRCULATING SUPPLY"
                id="components.homeInfo.circulatingSupply"
              />
            </b>
            <p className="font-vinila-extended text-[20px] text-black dark:text-black">
              {inView && <CountUp separator="," start={10000000} end={circulatingSupply} />}
            </p>
          </div>
          <div className="horizontallLine"></div>
          <div className="mx-8 my-6">
            <b className="text-brand-orange dark:text-brand-orange">
              <FormattedMessage
                defaultMessage="TRANSACTIONS PER DAY"
                id="components.homeInfo.transactionPerDay"
              />
            </b>
            <p className="font-vinila-extended text-[20px] text-black dark:text-black">
              {inView && <CountUp separator="," start={1000} end={transactionPerDay} />}
            </p>
          </div>
          <div className="horizontallLine"></div>
          <div className="mx-8 my-6">
            <b className="text-brand-orange dark:text-brand-orange">
              <FormattedMessage defaultMessage="HASH RATE" id="components.homeInfo.hashRate" />
            </b>
            <p className="font-vinila-extended text-[20px] text-black dark:text-black">
              {inView && <CountUp separator="," decimals={2} start={10} end={hashRate} />} TH/s
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
