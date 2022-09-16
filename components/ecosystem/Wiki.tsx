import Image from 'next/image';
import Button from '../Button';

export default function Wiki() {
  return (
    <div id="Wiki" className="max-w-[1300px] mx-auto p-4 relative z-10">
      <div className="hidden md:flex flex-row mb-10">
        <p className="font-vinila-extended-bold text-[80px]">Wiki</p>
        <div className="my-auto ml-12">
          <Button
            text="EXPLORE"
            url="https://ergonaut.space/"
            newTab={true}
            underline={true}
            textColor="brand-orange"
            background={false}
            icon="ArrowRight"
            iconColor="orange"
            customClass=" -ml-4"
          />
        </div>
      </div>
      <div className="justify-around mt-16 md:-mt-10 dark:flex ecosystem-hero-gradient">
        <div className="ergonaut-card h-[349px] w-full flex flex-row justify-end">
          <div className="my-auto mx-auto">
            <p className="hidden md:block absolute z-20 max-w-lg -mt-[3rem] -ml-40 text-white dark:text-white">
              ergonaut.space is our community-run wiki! Jam-packed with tons of great information on
              the underlying technical details of the Ergo blockchain in easy to understand language
              for non-technical people. Theres also plenty of guides, tutorials, and user-submitted
              content. Create an account to start contributing!
            </p>
          </div>
          <Image
            src={'/assets/ecosystem/ergonaut.png'}
            width="405px"
            height="349px"
            className="rounded-br-2xl"
            alt="The Ergo Mascot, The Ergonaut - is shown standing on a horizontal plane on top of a moon."
          />
        </div>
      </div>
      <div className="md:hidden">
        <p className="font-vinila-extended-bold text-[48px] mb-4">Wiki</p>
        <p className="text-[14px] text-[#807e7e] dark:text-[#807e7e] mb-4">
          ergonaut.space is the community wiki of the Ergo blockchain, a guide translating how to
          use and the underlying technical details of the Ergo blockchain in easy to understand
          language for non-technical people.
        </p>
        <Button
          text="LEARN MORE"
          url="https://ergonaut.space/"
          newTab={true}
          underline={true}
          textColor="brand-orange"
          background={false}
          icon="ArrowRight"
          iconColor="orange"
          customClass=" -ml-4"
        />
      </div>
    </div>
  );
}
