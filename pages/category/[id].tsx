import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import BlogPosts from '../../components/blog/BlogPosts';
import Button from '../../components/Button';
import Layout from '../../components/Layout';

type Props = {
  posts?: any;
  news?: any;
  categories?: any;
};

export default function Category(props: Props) {
  const intl = useIntl();
  const { locale, query } = useRouter();
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
      <Layout title={title}>
        <div id="Blog" className="max-w-[1300px] mx-auto p-4 relative z-10 min-h-[1800px]">
          <div className="flex flex-row justify-between my-10 mx-4 md:mx-32">
            <div>
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
              <p className="font-vinila-extended text-[40px] md:text-[48px]">
                Search by tag “{query.id}”
              </p>
            </div>
          </div>
          <BlogPosts
            data={props.posts}
            locale={locale}
            filter={`&filters[type][$eq]=blog&filters[tag][$contains]=${query.id}`}
          />
        </div>
      </Layout>
    </div>
  );
}

export const getServerSideProps = async (context: any) => {
  const posts = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_API +
      `/api/posts?sort=date:desc&pagination[page]=1&pagination[pageSize]=21&populate=*&filters[type][$eq]=blog&filters[tag][$contains]=${context.query.id}&locale=` +
      context.locale,
  )
    .then((response) => response.json())
    .then((response) => response.data);

  return {
    props: { posts },
  };
};
