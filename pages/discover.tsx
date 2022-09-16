import { useIntl } from 'react-intl';
import DiscoverHero from '../components/discover/DiscoverHero';
import Documents from '../components/discover/Documents';
import ErgoExplorer from '../components/discover/ErgoExplorer';
import FAQ from '../components/discover/FAQ';
import GrantsAndBounties from '../components/discover/GrantsAndBounties';
import Layout from '../components/Layout';

type Props = {
  documents?: any;
  faq?: any;
};

export default function Discover(props: Props) {
  const intl = useIntl();
  const title = intl.formatMessage({
    id: 'pages.discover.title',
    defaultMessage: 'Discover',
  });
  return (
    <div>
      <div className="discover-frame-1"></div>
      <div className="discover-frame-2"></div>
      <div className="discover-frame-3"></div>
      <div className="discover-blur-1"></div>
      <div className="discover-blur-2"></div>
      <div className="discover-blur-3"></div>
      <Layout title={title}>
        <DiscoverHero />
        <GrantsAndBounties />
        {props.faq ? <FAQ faq={props.faq} /> : null}
        <ErgoExplorer />
        {props.documents ? <Documents documents={props.documents} /> : null}
      </Layout>
    </div>
  );
}

export const getStaticProps = async (context: any) => {
  const documents = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_API +
      '/api/documents?pagination[page]=1&pagination[pageSize]=500&populate=*&locale=' +
      context.locale,
  )
    .then((response) => response.json())
    .catch((err) => null);
  const faq = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_API +
      '/api/f-a-qs?pagination[page]=1&pagination[pageSize]=500&populate=*&locale=' +
      context.locale,
  )
    .then((response) => response.json())
    .catch((err) => null);
  return {
    props: { documents, faq },

    revalidate: 60,
  };
};
