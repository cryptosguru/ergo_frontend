import { FormattedMessage } from 'react-intl';

export default function CommunityHero() {
  return (
    <div id="CommunityHero" className="max-w-[1300px] mx-auto p-4 relative z-10">
      <div className="">
        <p className="font-roboto font-bold text-[14px] lg:text-[20px] text-[#585858]">
          <FormattedMessage
            defaultMessage="GRASSROOTS FINANCE"
            id="components.communityHero.subtitle"
          />
        </p>
      </div>
      <h1>Community</h1>
    </div>
  );
}
