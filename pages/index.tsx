import { useIntl } from 'react-intl';
import Autolykos from '../components/home/Autolykos';
import Highlights from '../components/home/Highlights';
import HomeHero from '../components/home/HomeHero';
import HomeInfo from '../components/home/HomeInfo';
import News from '../components/home/News';
import UsingErg from '../components/home/UsingErg';
import Layout from '../components/Layout';
import ContributeForm from '../components/shared/ContributeForm';
import Feed from '../components/shared/Feed';
import dynamic from 'next/dynamic';
import UniqueErgo from '../components/home/UniqueErgo';
const Partners = dynamic(() => import('../components/home/Partners'), {
  ssr: false,
});

type Props = {
  posts?: any;
  partners?: any;
  news?: any;
  info?: any;
  blockReward: number;
};

export default function Home(props: Props) {
  const intl = useIntl();
  const title = intl.formatMessage({
    id: 'pages.home.title',
    defaultMessage: 'Home',
  });
  return (
    <div>
      <div className="home-blur-1"></div>
      <div className="home-blur-2"></div>
      <div className="home-blur-3"></div>
      <div className="home-blur-4"></div>
      <div className="home-frame-3"></div>
      <div className="home-frame-1"></div>
      <div className="home-frame-2"></div>
      <div className="home-frame-4"></div>
      <div className="home-frame-5"></div>
      <Layout title={title}>
        <HomeHero />
        <Highlights />
        {props.blockReward && props.info ? (
          <HomeInfo
            circulatingSupply={props.info.supply}
            hashRate={props.info.hashRate}
            blockReward={props.blockReward}
            transactionPerDay={props.info.transactionAverage}
          />
        ) : null}

        <UniqueErgo />
        <UsingErg />
        <Autolykos />
        {props.posts ? <News news={props.news} /> : null}
        {props.posts ? <Feed posts={props.posts} /> : null}
        {props.partners ? <Partners partners={props.partners} /> : null}
        <ContributeForm />
      </Layout>
    </div>
  );
}

export const getStaticProps = async (context: any) => {
  const posts = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_API +
      '/api/posts?sort=date:desc&pagination[page]=1&pagination[pageSize]=20&populate=*&filters[type][$eq]=blog',
  )
    .then((response) => response.json())
    .catch((err) => null);
  const partners = await fetch(process.env.NEXT_PUBLIC_STRAPI_API + '/api/partners?populate=*')
    .then((response) => response.json())
    .then((response) => response.data)
    .catch((err) => null);
  const news = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_API +
      '/api/posts?sort=date:desc&pagination[page]=1&pagination[pageSize]=3&populate=*&filters[type][$eq]=news',
  )
    .then((response) => response.json())
    .then((response) => response.data)
    .catch((err) => null);

  const blockReward = await fetch('https://api.ergoplatform.com/blocks')
    .then((response) => response.json().then((data) => data.items[0].minerReward / 1000000000))
    .catch((err) => null);

  const info = await fetch('https://api.ergoplatform.com/info/')
    .then((response) => response.json())
    .catch((err) => null);

  return {
    props: { posts, partners, news, info, blockReward },
    revalidate: 60,
  };
};
