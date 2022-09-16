import { useIntl } from 'react-intl';
import ChangingTheWorld from '../components/ecosystem/ChangingTheWorld';
import DApps from '../components/ecosystem/DApps';
import EcosystemHero from '../components/ecosystem/EcosystemHero';
import Favorites from '../components/ecosystem/Favorites';
import FeaturesAndProjects from '../components/ecosystem/FeaturesAndProjects';
import Roadmap from '../components/ecosystem/Roadmap';
import Wiki from '../components/ecosystem/Wiki';
import Layout from '../components/Layout';

type Props = {
  apps?: any;
  roadmap?: any;
  projects?: any;
  favorites?: any;
  chagingTheWorldProjects?: any;
};

export default function Ecosystem(props: Props) {
  const intl = useIntl();
  const title = intl.formatMessage({
    id: 'pages.ecosystem.title',
    defaultMessage: 'Ecosystem',
  });
  return (
    <div>
      <div className="ecosystem-frame-1"></div>
      <div className="ecosystem-frame-2"></div>
      <div className="ecosystem-frame-3"></div>
      <div className="ecosystem-frame-4"></div>
      <div className="ecosystem-frame-5"></div>
      <div className="ecosystem-blur-1"></div>
      <div className="ecosystem-blur-2"></div>
      <div className="ecosystem-blur-3"></div>
      <Layout title={title}>
        <EcosystemHero />
        {props.apps ? <DApps apps={props.apps} /> : null}
        {props.roadmap ? <Roadmap roadmapItems={props.roadmap} /> : null}
        <Wiki />
        {props.favorites ? <Favorites favorites={props.favorites} /> : null}
        {props.projects ? <FeaturesAndProjects projects={props.projects} /> : null}
        {props.chagingTheWorldProjects ? (
          <ChangingTheWorld chagingTheWorldProjects={props.chagingTheWorldProjects} />
        ) : null}
      </Layout>
    </div>
  );
}

export const getServerSideProps = async (context: any) => {
  const apps = await fetch(process.env.NEXT_PUBLIC_STRAPI_API + '/api/dapps?populate=*')
    .then((response) => response.json())
    .then((response) => response.data)
    .catch((err) => null);
  const roadmap = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_API + '/api/roadmaps?populate=*&pagination[pageSize]=100',
    // "/api/roadmaps?populate=*&pagination[pageSize]=100&locale="+ context.locale
  )
    .then((response) => response.json())
    .catch((err) => null);
  const projects = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_API +
      '/api/features-and-projects?populate=*&pagination[page]=1&pagination[pageSize]=4&sort=order:asc',
  )
    .then((response) => response.json())
    .then((response) => response.data)
    .catch((err) => null);

  const favorites = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_API +
      '/api/our-favorites?populate=*&pagination[page]=1&pagination[pageSize]=100',
  )
    .then((response) => response.json())
    .then((response) => response.data)
    .catch((err) => null);
  const chagingTheWorldProjects = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_API +
      '/api/changing-the-worlds?populate=*&pagination[page]=1&pagination[pageSize]=100',
  )
    .then((response) => response.json())
    .then((response) => response.data)
    .catch((err) => null);
  return {
    props: { apps, roadmap, projects, favorites, chagingTheWorldProjects },
  };
};
