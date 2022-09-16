import { useIntl } from 'react-intl';
import Button from '../Button';

export default function GrantsAndBounties() {
  const intl = useIntl();
  const button1Text = intl.formatMessage({
    id: 'components.grantsAndBounties.button1',
    defaultMessage: 'CONTRIBUTING',
  });
  const button2Text = intl.formatMessage({
    id: 'components.grantsAndBounties.button2',
    defaultMessage: 'START A RAFFLE',
  });
  const button3Text = intl.formatMessage({
    id: 'components.grantsAndBounties.button3',
    defaultMessage: 'GET IN TOUCH',
  });

  return (
    <div id="GrantsAndBounties" className="max-w-[1300px] mx-auto p-4 mt-40 relative z-10">
      <h1 className="leading-tight xl:ml-72">
        <b>Grants & Bounties</b>
      </h1>
      <p className="max-w-xs text-[#807e7e] dark:text-[#807e7e] mt-6 xl:mt-24 xl:ml-[600px] xl:max-w-lg">
        In general, anything educative for the community is subject to some bounty even if not
        specifically listed. We are looking to fund grants for projects that focus on building key
        ecosystem infrastructure. However, the quickest way to get some funding is to start a
        Raffle.
      </p>
      <div className="flex flex-col xl:flex-row xl:ml-[600px]">
        <div className="-ml-4 mt-10">
          <Button
            text={button1Text}
            url="https://docs.ergoplatform.com/contribute/"
            newTab={true}
            underline={true}
            textColor="brand-orange"
            background={false}
            icon="ArrowRight"
            iconColor="orange"
          />
        </div>
        <div className="-ml-4 mt-10 xl:ml-16">
          <Button
            text={button2Text}
            url="https://ergoraffle.com/"
            newTab={true}
            underline={true}
            textColor="brand-orange"
            background={false}
            icon="ArrowRight"
            iconColor="orange"
          />
        </div>
        <div className="-ml-4 mt-10 xl:ml-16">
          <Button
            text={button3Text}
            url="mailto:team@ergoplatform.org"
            newTab={true}
            underline={true}
            textColor="brand-orange"
            background={false}
            icon="ArrowRight"
            iconColor="orange"
          />
        </div>
      </div>
    </div>
  );
}
