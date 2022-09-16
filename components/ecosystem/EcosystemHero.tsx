import Image from 'next/image';
import { FormattedMessage } from 'react-intl';

export default function EcosystemHero() {
  return (
    <div id="EcosystemHero" className="max-w-[1300px] mx-auto p-4 relative z-10">
      <h1 className="absolute z-10">
        <b>
          <FormattedMessage id="components.ecosystemHero.title" defaultMessage="Ecosystem" />
        </b>
      </h1>
      <div className="justify-around mt-16 md:-mt-10 hidden dark:flex ecosystem-hero-gradient">
        <Image src={'/assets/ecosystem.png'} width="1100px" height="1100px" alt="3D Ergo Logo" />
      </div>
      <div className="flex justify-around mt-16 md:-mt-10 dark:hidden">
        <Image
          src={'/assets/ecosystem-light.png'}
          width="1100px"
          height="1100px"
          alt="3D Ergo Logo"
        />
      </div>
    </div>
  );
}
