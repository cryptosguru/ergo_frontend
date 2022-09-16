import { useIntl } from 'react-intl';
import CommunityCardsFeed from '../components/community/CommunityCardsFeed';
import CommunityHero from '../components/community/CommunityHero';
import ErgoFoundation from '../components/community/ErgoFoundation';
import HallOfFame from '../components/community/HallOfFame';
import OurMission from '../components/community/OurMission';
import Sigmanauts from '../components/community/Sigmanauts';
import Spotlight from '../components/community/Spotlight';
import Layout from '../components/Layout';
import ContributeForm from '../components/shared/ContributeForm';
import Feed from '../components/shared/Feed';

type Props = {
  posts?: any;
  teamMembers?: any;
};

export default function Community(props: Props) {
  const intl = useIntl();
  const title = intl.formatMessage({
    id: 'pages.community.title',
    defaultMessage: 'Community',
  });

  return (
    <div>
      <div className="community-blur-2"></div>
      <div className="community-frame-3"></div>
      <div className="community-frame-1"></div>
      <div className="community-frame-2"></div>
      <div className="community-frame-4"></div>
      <div className="community-frame-5"></div>
      <div className="community-frame-6"></div>
      <div className="community-frame-7"></div>
      <div className="community-frame-8"></div>
      <div className="community-frame-9"></div>
      <div className="community-frame-10"></div>
      <div className="community-blur-1"></div>
      <Layout title={title}>
        <CommunityHero />
        <CommunityCardsFeed />
        <Sigmanauts />
        <ContributeForm />

        {props.posts?.data?.length !== 0 ? (
          <>
            <Spotlight />
            <Feed posts={props.posts} />
          </>
        ) : null}
        {props.teamMembers ? <HallOfFame teamMembers={props.teamMembers} /> : null}
        <ErgoFoundation />
        <OurMission />
      </Layout>
    </div>
  );
}

export const getServerSideProps = async (context: any) => {
  const posts = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_API +
      '/api/posts?sort=date:desc&pagination[page]=1&pagination[pageSize]=20&populate=*&filters[type][$eq]=blog&filters[spotlight][$eq]=true&locale=' +
      context.locale,
  )
    .then((response) => response.json())
    .catch((err) => null);
  const teamMembers = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_API +
      '/api/team-members?pagination[pageSize]=100&populate=*&locale=' +
      context.locale,
  )
    .then((response) => response.json())
    .then((response) => response.data)
    .catch((err) => null);
  return {
    props: { posts, teamMembers },
  };
};
