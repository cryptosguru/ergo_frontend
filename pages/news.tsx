import { useIntl } from 'react-intl';
import BlogNews from '../components/blog/BlogNews';
import Layout from '../components/Layout';

type Props = {
  news?: any;
  media?: any;
};

export default function News(props: Props) {
  const intl = useIntl();
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
          {props.news ? <BlogNews news={props.news} /> : null}
        </div>
      </Layout>
    </div>
  );
}

export const getServerSideProps = async (context: any) => {
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

  return {
    props: { news, media },
  };
};
