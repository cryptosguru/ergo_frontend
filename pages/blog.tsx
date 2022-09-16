import Link from 'next/link';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import BlogPosts from '../components/blog/BlogPosts';
import Media from '../components/blog/Media';
import Layout from '../components/Layout';

type Props = {
  posts?: any;
  news?: any;
  media?: any;
  categories?: any;
};

export default function Blog(props: Props) {
  const intl = useIntl();
  const { locale } = useRouter();
  const title = intl.formatMessage({
    id: 'pages.blog.title',
    defaultMessage: 'Blog',
  });
  return (
    <div>
      <div className="blog-frame-1"></div>
      <div className="blog-frame-2"></div>
      <div className="blog-frame-3"></div>
      <div className="blog-blur-1"></div>
      <div className="blog-blur-2"></div>
      <Layout title={title}>
        <div id="Blog" className="max-w-[1300px] mx-auto p-4 relative z-10">
          <div className="flex flex-row justify-between my-10 mx-4">
            <div className="flex flex-row flex-wrap">
              {props.categories
                ? props.categories.map((category: any) => (
                    <Link href={`/category/${category.attributes.name}`} key={category.id} passHref>
                      <div className="my-2 sm:my-auto cursor-pointer">
                        <b
                          key={category.attributes.name}
                          className="items-center px-3 py-2 rounded-full text-sm font-[12px] mr-4 bg-brand-orange text-white uppercase z-10 tag"
                        >
                          {category.attributes.name}
                        </b>
                      </div>
                    </Link>
                  ))
                : null}
            </div>
            <div>
              <h1>Blog</h1>
            </div>
          </div>
          <BlogPosts data={props.posts} locale={locale} />
        </div>
      </Layout>
    </div>
  );
}

export const getServerSideProps = async (context: any) => {
  const posts = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_API +
      '/api/posts?sort=date:desc&pagination[page]=1&pagination[pageSize]=21&populate=*&filters[type][$eq]=blog&locale=' +
      context.locale,
  )
    .then((response) => response.json())
    .then((response) => response.data)
    .catch((err) => null);

  const news = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_API +
      '/api/posts?sort=date:desc&pagination[page]=1&pagination[pageSize]=20&populate=*&filters[type][$eq]=news&locale=' +
      context.locale,
  )
    .then((response) => response.json())
    .then((response) => response.data)
    .catch((err) => null);

  const media = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_API + '/api/media-posts?pagination[pageSize]=20',
  )
    .then((response) => response.json())
    .then((response) => response.data)
    .catch((err) => null);

  const categories = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_API +
      '/api/categories?pagination[pageSize]=20&locale=' +
      context.locale,
  )
    .then((response) => response.json())
    .then((response) => response.data)
    .catch((err) => null);

  return {
    props: { posts, news, categories, media },
  };
};
