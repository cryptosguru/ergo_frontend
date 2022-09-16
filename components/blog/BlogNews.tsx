import Link from 'next/link';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FormattedDate } from 'react-intl';
import Button from '../Button';

type NewsPostProps = {
  title: string;
  subtitle?: string;
  date?: string;
  url: string;
};

function NewsPost({ title, subtitle, date, url }: NewsPostProps) {
  return (
    <>
      {url ? (
        <Link key={url} href={url}>
          <div className="min-w-[300px] h-[300px] rounded-xl p-6 md:px-10 md:py-10 blog-news relative md:min-w-[610px] md:h-[350px] cursor-pointer">
            <p className="text-[12px] md:text-[14px]">
              <b>
                <FormattedDate value={date} day="numeric" month="long" year="numeric" />
              </b>
            </p>
            <p className="text-[16px] md:text-[24px] font-subtitle-3-bold text-brand-orange dark:text-brand-orange my-2 text-clip">
              {title.length > 60 ? title.substring(0, 60) + '...' : title}
            </p>
            {subtitle ? (
              <p className="text-[12px] md:text-[16px] text-[#807e7e] dark:text-[#807e7e] mb-2 text-clip">
                {subtitle?.length > 350 ? subtitle?.substring(0, 320) + '...' : subtitle}
              </p>
            ) : (
              ''
            )}
            <div className="-ml-4 absolute bottom-4 md:bottom-12">
              <Button
                text="READ"
                url={url}
                newTab={true}
                underline={true}
                textColor="brand-orange"
                background={false}
              />
            </div>
          </div>
        </Link>
      ) : null}
    </>
  );
}

type Props = {
  news: any;
};

export default function BlogNews({ news }: Props) {
  const [posts, setPosts] = useState(news);
  const [hasMore, setHasMore] = useState(true);

  const getMorePost = async () => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_STRAPI_API +
        `/api/posts?sort=date:desc&pagination[withCount]=true&pagination[start]=${posts.length}&pagination[limit]=9&populate=*&filters[type][$eq]=news&locale=` +
        'en',
    );
    const newPosts = await res.json();
    setPosts((post: any) => [...post, ...newPosts.data]);
    if (
      newPosts.meta.pagination.start + newPosts.meta.pagination.limit >
      newPosts.meta.pagination.total
    ) {
      setHasMore(false);
    }
  };

  return (
    <div>
      <h1>News</h1>

      <InfiniteScroll
        dataLength={posts.length}
        next={getMorePost}
        hasMore={hasMore}
        loader={
          <div className="text-center mt-20 mb-8">
            <h4>Loading...</h4>
          </div>
        }
        endMessage={
          <div className="text-center mt-20 mb-8">
            <h4>Nothing more to show</h4>
          </div>
        }
        className="w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 no-scrollbar relative">
          {posts?.map((post: any) => (
            <NewsPost key={post.id} {...post.attributes} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
