import * as _ from 'lodash';
import { FormattedMessage } from 'react-intl';
import { getIconComponentByName } from '../../utils/icons-map';
import Button from '../Button';

type Props = {
  roadmapItems?: any;
};

function processRoadmap(roadmap: any, sectionName: string) {
  let result: any;
  result = _.sortBy(roadmap.data, ['attributes.order']);
  result = _.filter(result, { attributes: { group: sectionName } });
  return result;
}

type RoadmapItemProps = {
  title: string;
  url?: string;
  description?: string;
  status: string;
};

function RoadmapItem({ title, url, description, status }: RoadmapItemProps) {
  var inputProps = {
    href: '#0',
    target: '_self',
  };
  let classname = 'rounded-3xl flex flex-row roadmap-item-bg p-3 mb-3';
  if (url != null) {
    inputProps.href = url;
    inputProps.target = '_blank';
    // classname += " underline";
  }
  let iconName = '';
  switch (status) {
    case 'completed':
      iconName = 'RoadmapCompleted';
      break;
    case 'in_progress':
      iconName = 'RoadmapInProgress';
      break;
    case 'planned':
      iconName = 'RoadmapPlanned';
      break;
    default:
      break;
  }
  return (
    <>
      {url == null ? (
        <div className={classname}>
          <div className="my-auto">{getIconComponentByName(iconName)}</div>
          <div className="my-auto ml-3">
            <p className="font-bold">{title}</p>
            <p className="text-[#807e7e] dark:text-[#807e7e]">{description}</p>
          </div>
        </div>
      ) : (
        <a {...inputProps}>
          <div className={classname}>
            <div className="my-auto">{getIconComponentByName(iconName)}</div>
            <div className="my-auto ml-3">
              <p className="font-bold underline">{title}</p>
              <p className="text-[#807e7e] dark:text-[#807e7e]">{description}</p>
            </div>
          </div>
        </a>
      )}
    </>
  );
}

export default function Roadmap(props: Props) {
  const sections = [
    {
      name: <FormattedMessage defaultMessage="SO FAR" id="components.roadmap.section1.title" />,
      tag: 'so_far',
    },
    {
      name: <FormattedMessage defaultMessage="UP NEXT" id="components.roadmap.section2.title" />,
      tag: 'up_next',
    },
    {
      name: <FormattedMessage defaultMessage="SOON" id="components.roadmap.section3.title" />,
      tag: 'soon',
    },
    {
      name: (
        <FormattedMessage defaultMessage="2022 & BEYOND" id="components.roadmap.section3.title" />
      ),
      tag: 'this_year',
    },
  ];
  return (
    <div id="Roadmap" className="max-w-[1300px] mx-auto p-4 relative z-10">
      <p className="font-vinila-extended-bold text-[48px] lg:text-[120px] text-center">
        <b>
          <FormattedMessage defaultMessage="Roadmap" id="components.roadmap.title" />
        </b>
      </p>
      <p className="mx-auto text-center max-w-lg">
        <FormattedMessage
          defaultMessage="Please note that Ergo is a platform. Many of the projects listed below have no formal
            connection with the Ergo Foundation or each other."
          id="components.roadmap.description"
        />
        <br />
        <br />
        <Button
          text={
            <FormattedMessage
              defaultMessage="VIEW MORE ON COINMARKETCAL"
              id="components.roadmap.coinmarketcal"
            />
          }
          url="https://coinmarketcal.com/en/coin/ergo"
          newTab={false}
          underline={true}
          textColor="brand-orange"
          background={false}
          icon="ArrowRight"
          iconColor="orange"
          customClass=" -ml-4 mb-8"
        />
      </p>

      <div className="flex overflow-x-auto space-x-8 mt-10 no-scrollbar pb-10 ">
        {sections.map((section: any, i: number) => (
          <div key={i} className="min-w-[235px] md:w-1/4">
            <p className="font-vinilia-extended font-bold text-[16px] lg:text-[18px] text-center mb-8">
              {section.name}
            </p>
            <div>
              {processRoadmap(props.roadmapItems, section.tag).map((item: any, n: number) => (
                <RoadmapItem
                  key={n}
                  title={item.attributes.title}
                  status={item.attributes.status}
                  url={item.attributes.url}
                  description={item.attributes.description}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
