import { FormattedDate } from 'react-intl';
import Layout from '../../components/Layout';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import rehypeRaw from 'rehype-raw';
import Image from 'next/image';
import Button from '../../components/Button';
import { BlogFacebook, BlogLink, BlogTwitter, LogoBlack } from '../../components/icons';
import Link from 'next/link';
import BlogPosts from '../../components/blog/BlogPosts';
import { useRouter } from 'next/router';

type Props = {
  post?: any;
  posts?: any;
};

export default function Post(props: Props) {
  const { locale } = useRouter();
  let hasImage = false;
  let imageUrl = '';
  if (props.post.attributes.blogPhoto?.length > 0) {
    hasImage = true;
    imageUrl = 'https://storage.googleapis.com/ergo-cms-media' + props.post.attributes.blogPhoto;
  }
  if (props.post.attributes.image.data) {
    hasImage = true;
    imageUrl = props.post.attributes.image.data.attributes.formats.large.url;
  }

  return (
    <div>
      <div className="blog-frame-1"></div>
      <div className="blog-frame-2"></div>
      <div className="blog-frame-3"></div>
      <div className="blog-blur-1"></div>
      <Layout title={props.post.attributes.title}>
        <div className=" max-w-[1300px] mx-auto p-4 relative z-10 min-h-[1800px]">
          <div className="post bg-white rounded-xl px pt-8 border-[1px] border-gray-300 mt-20 mb-40">
            <div className="px-4 md:px-32 md:py-20">
              <div className="-ml-4">
                <Button
                  text="BACK TO ALL POSTS"
                  url="/blog"
                  newTab={false}
                  underline={true}
                  textColor="brand-orange"
                  background={false}
                />
              </div>
              <h4 className="text-[40px] text-black dark:text-black">
                {props.post.attributes.title}
              </h4>
              <div className="mb-8 mt-4 flex flex-row">
                {props.post.attributes.tag
                  ?.split(',')
                  .filter((word: string) => word.length > 0)
                  .map((item: string) => (
                    <Link href={`/category/${item.trim()}`} key={item.trim()} passHref>
                      <div className="cursor-pointer">
                        <b
                          key={item.trim()}
                          className="items-center px-3 py-2 rounded-full text-sm font-[12px] mr-4 bg-brand-orange text-white uppercase z-10 tag"
                        >
                          {item.trim()}
                        </b>
                      </div>
                    </Link>
                  ))}
              </div>
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <LogoBlack viewBox="0 0 82 82" className="h-10 w-10" />
                </div>
                <div className="ml-3">
                  <b className="text-[14px] text-black dark:text-black">
                    {props.post.attributes.author}
                  </b>
                  <div className="flex space-x-1">
                    <p className="text-[14px] text-black dark:text-black">
                      <FormattedDate
                        value={props.post.attributes.date}
                        day="numeric"
                        month="long"
                        year="numeric"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-center md:mx-32">
              {hasImage == true ? (
                <img src={imageUrl} height="100%" width="100%" className="md:rounded-xl" alt="" />
              ) : (
                ''
              )}
            </div>
            <div className="px-4 md:px-32 md:py-20">
              <p className="text-black dark:text-black">{props.post.attributes.subtitle}</p>
              <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkBreaks]}
                rehypePlugins={[rehypeRaw]}
                className="blog-md"
              >
                {props.post.attributes.content}
              </ReactMarkdown>
              <p className="mt-10 text-black dark:text-black font-vinila-extended text-[24px]">
                Share post
              </p>
              <div className="flex flex-row gap-x-16 pb-10">
                <div className="cursor-pointer">
                  <Link
                    href="https://www.facebook.com/sharer/sharer.php?u={window.location.href}"
                    passHref
                  >
                    <BlogFacebook />
                  </Link>
                </div>
                <div className="cursor-pointer">
                  <Link
                    href="https://twitter.com/intent/tweet?text={window.location.href}"
                    passHref
                  >
                    <BlogTwitter />
                  </Link>
                </div>
                <div className="cursor-pointer">
                  <Link href="https://google.com" passHref>
                    <BlogLink />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <BlogPosts data={props.posts} locale={locale} />
        </div>
      </Layout>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const post = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_API +
      '/api/posts?&filters[permalink][$eq]=' +
      encodeURIComponent(context.query.id) +
      '&populate=*&locale=' +
      context.locale,
  ).then((response) => response.json());

  const posts = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_API +
      '/api/posts?sort=date:desc&pagination[page]=1&pagination[pageSize]=21&populate=*&filters[type][$eq]=blog&locale=' +
      context.locale,
  ).then((response) => response.json());
  if (post.data.length === 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: { post: post.data[0], posts: posts.data },
  };
}
