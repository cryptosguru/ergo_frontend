import Home, { getServerSideProps } from "../../pages/index";

export default {
  title: "Pages/Home",
  component: Home,
};

export const HomePage = (args, { loaded: { posts, partners, news, info, blockReward } }) => (
  <Home posts={posts} partners={partners} news={news} info={info} blockReward={blockReward} />
);

HomePage.loaders = [
  async () => {
    let data = await getServerSideProps({ locale: "en" });
    return data.props;
  },
];