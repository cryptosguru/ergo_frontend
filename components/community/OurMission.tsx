import { FormattedMessage } from 'react-intl';
import Button from '../Button';

export default function OurMission() {
  return (
    <div id="Foundation" className="max-w-[1300px] mx-auto p-4 relative z-10">
      <p className="font-vinila-extended-bold text-[40px] md:text-[80px] mb-8">
        <FormattedMessage defaultMessage="Our Mission" id="components.ourmission.title" />
      </p>
      <div className="md:mx-auto md:w-[758px]">
        <p className="mb-8 text-[#807e7e] dark:text-[#807e7e] font-bold md:text-[24px] md:max-w-3xl">
          <FormattedMessage
            defaultMessage="Ergo Foundation is committed to organic and non-breaking development of Ergo Platform protocol."
            id="components.ourmission.description"
          />
        </p>
        <Button
          text={
            <FormattedMessage
              defaultMessage="REACH US ON TWITTER"
              id="components.ourmission.reachus.twitter"
            />
          }
          url="https://twitter.com/ergofoundation"
          newTab={true}
          underline={true}
          textColor="brand-orange"
          background={false}
          icon="ArrowRight"
          iconColor="orange"
          customClass=" -ml-4 mb-8"
        />
        <br />
        <Button
          text={
            <FormattedMessage
              defaultMessage="EMISSION AND TOKENOMICS"
              id="components.ourmission.emissionAndTokenomics"
            />
          }
          url="/blog/emission/"
          newTab={false}
          underline={true}
          textColor="brand-orange"
          background={false}
          icon="ArrowRight"
          iconColor="orange"
          customClass=" -ml-4 mb-8"
        />
        <br />
        <Button
          text={
            <FormattedMessage
              defaultMessage="THE ERGO FOUNDATION"
              id="components.ourmission.ergofoundation"
            />
          }
          url="/blog/ergo-foundation/"
          newTab={false}
          underline={true}
          textColor="brand-orange"
          background={false}
          icon="ArrowRight"
          iconColor="orange"
          customClass=" -ml-4 mb-8"
        />
        <p className="text-[#807e7e] dark:text-[#807e7e] md:text-[16px] md:max-w-3xl">
          <FormattedMessage
            defaultMessage="The Ergo Foundation is committed to make efforts to maximize the number of valuable ecosystem developments done in an open-source way with the least permissive license possible."
            id="components.ourmission.subdescription"
          />
        </p>
      </div>
    </div>
  );
}
