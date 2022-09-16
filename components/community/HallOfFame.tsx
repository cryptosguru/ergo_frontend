import { Tab } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import { Github, Linkedin, PersonPlaceholder, Twitter } from '../icons';

type Props = {
  teamMembers?: any;
};

type HallOfFamePersonProps = {
  name?: string;
  bio?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  image?: any;
};

function HallOfFamePerson(props: HallOfFamePersonProps) {
  return (
    <div className="h-[400px] w-56 lg:w-80 mx-auto md:mb-16">
      <div className="flip">
        <div className="flip-content h-56 w-56 lg:w-80 lg:h-80">
          <div className="flip-front object-cover w-full h-full ">
            {props.image?.attributes.formats?.small?.url != undefined ? (
              <Image
                layout="fill"
                src={props.image?.attributes.formats.small.url}
                className="hall-of-fame-person-card object-cover w-full h-full grayscale"
                alt="Hall of fame card of the person."
              />
            ) : (
              <PersonPlaceholder className="hall-of-fame-person-card object-cover w-full h-full" />
            )}
          </div>
          <div className="flip-back hall-of-fame-person-card h-56 w-56 lg:w-80 lg:h-80 flex flex-col-reverse">
            <div className="my-auto px-2 lg:px-6">
              <p className="text-center text-xs lg:text-sm align-middle text-white">{props.bio}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <div>
          <p className="font-vinila-extended text-[16px] lg:text-[24px]">{props.name}</p>
        </div>
        <div className="mt-0 md:mt-4 flex -ml-2 md:-ml-1 space-x-4">
          {props.linkedin != undefined ? (
            <Link href={props.linkedin} passHref>
              <a>
                <Linkedin
                  viewBox="0 0 28 28"
                  className="cursor-pointer scale-50 md:scale-100 fill-brand-orange w-10 h-10"
                />
              </a>
            </Link>
          ) : null}
          {props.twitter != undefined ? (
            <Link href={props.twitter} passHref>
              <a>
                <Twitter className="cursor-pointer scale-50 md:scale-100 fill-brand-orange" />
              </a>
            </Link>
          ) : null}
          {props.github != undefined ? (
            <Link href={props.github} passHref>
              <a>
                <Github className="cursor-pointer scale-50 md:scale-100 fill-brand-orange" />
              </a>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function GroupPersons(data: any, group: string) {
  let persons: Array<any> = [];
  data.forEach(function (person: any) {
    if (group == person.attributes.group) {
      persons.push(person);
    }
  });
  return (
    <div className="flex overflow-x-auto space-x-8 mt-8 no-scrollbar pb-10 lg:grid lg:grid-cols-3 lg:justify-around lg:space-x-0 lg:gap-y-20 lg:gap-x-8">
      {persons?.map((person: any, i: number) => (
        <div key={i}>
          <HallOfFamePerson
            key={i}
            name={person.attributes.name}
            bio={person.attributes.bio}
            github={person.attributes.github}
            twitter={person.attributes.twitter}
            linkedin={person.attributes.linkedin}
            image={person.attributes.image.data}
          />
        </div>
      ))}
    </div>
  );
}

export default function HallOfFame(props: Props) {
  return (
    <div
      id="HallOfFame"
      className="max-w-[1300px] mx-auto py-12 px-4 lg:py-16 lg:px-4 relative z-10"
    >
      <h2 className="lg:text-center">
        <b>
          <FormattedMessage defaultMessage={'Hall Of Fame'} id="components.hallOfFame.title" />
        </b>
      </h2>
      <div className="flex flex-row justify-center">
        <div className="lg:max-w-3xl lg:text-center">
          <p className="text-[#807e7e] dark:text-[#807e7e] mt-10">
            <FormattedMessage
              defaultMessage={`
                Ergo was founded with a team who have solid backgrounds in core development with
                cryptocurrencies and blockchain frameworks including NXT, Scorex, Cardano and Waves.
                Below are brief biographies for some of the core ERGO team as well as some of the many
                other developers and community members involved, some of whom are anonymous.
              `}
              id="components.hallOfFame.description1"
            />
          </p>
          <p className="text-[#807e7e] dark:text-[#807e7e] mt-10">
            <FormattedMessage
              defaultMessage={`
                Ergo is grassroots, and most core team members (and even foundation members) started out
                as community members. There is a brief description as well as information to read more
                about the Ergo Foundation at the bottom of this page.
              `}
              id="components.hallOfFame.description2"
            />
          </p>
        </div>
      </div>
      <div>
        <Tab.Group>
          <Tab.List className="flex justify-around mt-16">
            <Tab
              className={({ selected }) =>
                selected
                  ? 'font-subtitle-3-uppercase text-brand-orange dark:text-brand-orange underline underline-offset-4'
                  : 'font-subtitle-3-uppercase'
              }
            >
              <FormattedMessage defaultMessage={`CORE`} id="components.hallOfFame.tab1" />
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? 'font-subtitle-3-uppercase text-brand-orange dark:text-brand-orange underline underline-offset-4'
                  : 'font-subtitle-3-uppercase'
              }
            >
              <FormattedMessage defaultMessage={`COMMUNITY`} id="components.hallOfFame.tab2" />
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? 'font-subtitle-3-uppercase text-brand-orange dark:text-brand-orange underline underline-offset-4'
                  : 'font-subtitle-3-uppercase'
              }
            >
              <FormattedMessage defaultMessage={`FOUNDATION`} id="components.hallOfFame.tab3" />
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-16">
            <Tab.Panel className="outline-none">
              {GroupPersons(props.teamMembers, 'ecosystem_core')}
            </Tab.Panel>
            <Tab.Panel className="outline-none">
              {GroupPersons(props.teamMembers, 'community')}
            </Tab.Panel>
            <Tab.Panel className="outline-none">
              {GroupPersons(props.teamMembers, 'ergo_foundation')}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
