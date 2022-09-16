import { useState } from 'react';

type Props = {
  currentPrice: number;
  currentBlockReward: number;
  networkHashrate: number;
  difficulty: number;
};

export default function MiningCalculator(props: Props) {
  const [hashRate, setHashRate] = useState('');
  let dailyRevenueERG = 0;
  const blockTime = 120;
  const blocksPerDay = 86400 / blockTime;

  if (!isNaN(parseFloat(hashRate))) {
    dailyRevenueERG =
      ((1000000 * props.currentBlockReward * parseFloat(hashRate) * blockTime) / props.difficulty) *
      blocksPerDay;
  }
  return (
    <div
      id="MiningCalculator"
      className="max-w-[1300px] mx-auto py-12 px-4 lg:py-16 lg:px-4 relative z-10"
    >
      <div className="mining-calculator-bg mx-auto max-w-[1167px] grid gap-14 grid-cols-1 lg:grid-cols-2 py-12 lg:py-24 px-10 lg:px-20">
        <div>
          <h2 className="font-vinila-extended font-bold leading-none mb-6 xs:text-[32px] sm:text-[40px] lg:text-[80px] text-white">
            Mining Calculator
          </h2>
          <p className="text-[16px] text-[#807e7e] dark:text-[#807e7e] mb-7 lg:hidden">
            Autolykos is the underlying memory-hard ASIC-resistant Proof of Work (PoW) algorithm
            oriented towards GPUs.
          </p>
          <div className="lg:mb-4">
            <p className="text-[16px] lg:text-[20px] mb-4 lg:my-auto lg:pr-2 text-white">
              Your hashrate
            </p>
            <div>
              <div className="relative">
                <input
                  type="number"
                  name="hashrate"
                  id="hashrate"
                  className="block w-full h-12 pl-4 pr-10 sm:text-sm rounded-2xl bg-transparent border-[1px] border-white text-white"
                  placeholder="Hashrate value"
                  onChange={(e) => setHashRate(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-white">
                  MH/s
                </div>
              </div>
            </div>
          </div>
          <p className="text-[16px] text-[#807e7e] dark:text-[#807e7e] mb-7 hidden lg:block">
            Autolykos is the underlying memory-hard ASIC-resistant Proof of Work (PoW) algorithm
            oriented towards GPUs.
          </p>
        </div>
        <div>
          <p className="mb-6 lg:mb text-[16px] lg:mt-[92px] lg:text-[20px] text-white">
            Daily revenue
          </p>
          <p className="text-[32px] lg:text-[40px] text-white">{dailyRevenueERG.toFixed(2)} ERG</p>
          <p className="mb-16 text-[32px] lg:text-[40px] text-white">
            ={' '}
            <span className="text-brand-orange dark:text-brand-orange">
              ${(dailyRevenueERG * props.currentPrice).toFixed(2)}
            </span>
          </p>
          <div className="flex flex-row justify-between">
            <div>
              <p className="text-white">Current price</p>
              <div className="flex flex-col lg:flex-row">
                <p className="text-white">1 ERG =&nbsp;</p>
                <p className="text-brand-orange dark:text-brand-orange">
                  ${props.currentPrice.toFixed(2)}
                </p>
              </div>
            </div>
            <div>
              <p className="text-white">Current block reward</p>
              <div className="flex flex-col lg:flex-row">
                <p className="text-white">{props.currentBlockReward.toFixed(2)} ERG =&nbsp;</p>
                <p className="text-brand-orange dark:text-brand-orange">
                  ${(props.currentBlockReward * props.currentPrice).toFixed(2)}
                </p>
              </div>
            </div>
            <div>
              <p className="text-white">Network hashrate</p>
              <div className="flex flex-col lg:flex-row">
                <p className="text-white">
                  {(props.networkHashrate / 1000000000000).toFixed(2)}&nbsp;
                </p>
                <p className="text-white">TH/s</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
