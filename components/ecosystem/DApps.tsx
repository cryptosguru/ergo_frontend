import Image from 'next/image';
import { useIntl } from 'react-intl';
import Button from '../Button';

type Props = {
  apps?: any;
};

export default function DApps(props: Props) {
  const intl = useIntl();
  const button1Text = intl.formatMessage({
    id: 'components.DApps.seeAllProjects',
    defaultMessage: 'SEE ALL PROJECTS',
  });
  return (
    <div id="DApps" className="max-w-[1300px] mx-auto p-4 relative -mt-60 lg:-mt-[600px] z-10">
      <div className="lg:inline-flex">
        <h1>
          <b>DApps</b>
        </h1>
        <div className="-ml-4 mt-10 lg:my-auto lg:ml-8">
          <Button
            text={button1Text}
            url="https://sigmaverse.io/"
            newTab={true}
            underline={true}
            textColor="brand-orange"
            background={false}
            icon="ArrowRight"
            iconColor="orange"
          />
        </div>
      </div>
      <div className="flex overflow-x-auto space-x-8 mt-10 no-scrollbar pb-10">
        {props.apps.map((app: any, i: number) => (
          <div key={i} className="w-[200px]">
            <a href={app.attributes.url}>
              {app.attributes.image.data == null ? (
                <div className="h-[200px] w-[200px] rounded-md dapps-erg-card"></div>
              ) : (
                <div className="h-[200px] w-[200px]">
                  <Image
                    className="h-[200px] w-[200px]"
                    width={app.attributes.image.data?.attributes.width}
                    height={app.attributes.image.data?.attributes.height}
                    src={app.attributes.image.data?.attributes.url}
                    alt={app.attributes.title}
                  />
                </div>
              )}
            </a>
            <div className="mt-6 mb-3">
              <a className="font-subtitle-3-bold mb-3" href={app.attributes.url}>
                {app.attributes.title}
              </a>
            </div>
            <p className="text-[#585858] dark:text-[#807e7e]">{app.attributes.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
