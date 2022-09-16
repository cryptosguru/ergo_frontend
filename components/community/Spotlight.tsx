import { FormattedMessage, useIntl } from 'react-intl';
import Button from '../Button';

export default function Spotlight() {
  const intl = useIntl();
  const buttonText = intl.formatMessage({
    id: 'components.Spotlight.button',
    defaultMessage: 'SEE ALL POSTS',
  });
  return (
    <div
      id="Spotlight"
      className="max-w-[1300px] mx-auto p-4 flex flex-col md:flex-row md:mt-52 relative z-10"
    >
      <h1 className="mb-6 md:mb-auto md:mt-auto md:hidden">
        <FormattedMessage defaultMessage="Spotlight" id="components.Spotlight.title" />
      </h1>
      <h3 className="mb-6 md:mb-auto md:mt-auto hidden md:block">
        <b>
          <FormattedMessage defaultMessage="Spotlight" id="components.Spotlight.title" />
        </b>
      </h3>
      <div className="-ml-4 md:mb-auto md:mt-auto  md:ml-12">
        <Button
          text={buttonText}
          url="/blog"
          newTab={true}
          underline={true}
          textColor="brand-orange"
          background={false}
          icon="ArrowRight"
          iconColor="orange"
        />
      </div>
    </div>
  );
}
