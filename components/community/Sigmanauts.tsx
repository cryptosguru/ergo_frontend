import { FormattedMessage, useIntl } from 'react-intl';
import { getIconComponentByName } from '../../utils/icons-map';
import Button from '../Button';

export default function Sigmanauts() {
  const intl = useIntl();
  const buttonText = intl.formatMessage({
    id: 'components.Sigmanauts.button',
    defaultMessage: 'READ MORE & APPLY',
  });
  return (
    <div
      id="Sigmanauts"
      className="max-w-[1300px] mx-auto p-4 flex flex-col mb-44 md:flex-row md:mt-36 md:mb-64 relative z-10"
    >
      <div className="flex justify-end mb-10 md:w-1/3 md:mt-auto md:mb-auto 2xl:justify-around">
        {getIconComponentByName('Sigmanauts')}
      </div>
      <div className="md:ml-20 md:w-2/3">
        <h1 className="mb-6 md:hidden">
          <FormattedMessage defaultMessage="Sigmanauts" id="components.Sigmanauts.title" />
        </h1>
        <h2 className="mb-6 hidden md:block">
          <b>
            <FormattedMessage defaultMessage="Sigmanauts" id="components.Sigmanauts.title" />
          </b>
        </h2>
        <p className="font-subtitle-1 mb-6 md:text-[56px]">
          <FormattedMessage
            defaultMessage="Training programme"
            id="components.Sigmanauts.subTitle"
          />
        </p>
        <p className="text-[#807e7e] dark:text-[#807e7e] mb-6">
          <FormattedMessage
            defaultMessage="Apply for the Sigmanaut Training Programme to help shape and grow Ergo.
            {br}{br}

        Let's create grassroots finance.
        "
            id="components.Sigmanauts.text"
            values={{ br: <br /> }}
          />
        </p>
        <div className="-ml-4">
          <Button
            text={buttonText}
            url="blog/the-sigmanauts-programme/"
            newTab={false}
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
