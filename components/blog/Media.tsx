import Link from 'next/link';
import { FormattedDate } from 'react-intl';
import Button from '../Button';

type MediaPostProps = {
  Title: string;
  Description?: string;
  Date?: string;
  Link: string;
};

function MediaPost({ Title, Description, Date, Link: link }: MediaPostProps) {
  return (
    <>
      {link ? (
        <a key={link} href={link} target="_blank" rel="noreferrer">
          <div className="min-w-[300px] h-[250px] rounded-xl p-6 md:px-20 md:py-10 blog-news relative md:min-w-[550px] md:h-[250px] cursor-pointer">
            <p className="text-[12px] md:text-[14px]">
              <b>
                <FormattedDate value={Date} day="numeric" month="long" year="numeric" />
              </b>
            </p>
            <p className="text-[16px] md:text-[24px] font-subtitle-3-bold text-brand-orange dark:text-brand-orange my-2 text-clip">
              {Title.length > 60 ? Title.substring(0, 60) + '...' : Title}
            </p>
            {Description ? (
              <p className="text-[12px] md:text-[16px] text-[#807e7e] dark:text-[#807e7e] mb-2 text-clip">
                {Description?.length > 120 ? Description?.substring(0, 120) + '...' : Description}
              </p>
            ) : (
              ''
            )}
            <div className="-ml-4 absolute bottom-4 md:bottom-12">
              <Button
                text="READ"
                url={link}
                newTab={true}
                underline={true}
                textColor="brand-orange"
                background={false}
              />
            </div>
          </div>
        </a>
      ) : null}
    </>
  );
}

type Props = {
  mediaPosts: any;
};

export default function Media({ mediaPosts }: Props) {
  return (
    <div className="mt-4">
      <h1>Media About Us</h1>
      <div className="flex overflow-x-auto space-x-8 mt-8 no-scrollbar relative">
        {mediaPosts?.map((post: any) => (
          <MediaPost key={post.id} {...post.attributes} />
        ))}
      </div>
    </div>
  );
}
