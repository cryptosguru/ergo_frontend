import News from "../../../components/home/News";
import Dark from "../../../components/Dark";
import { getServerSideProps } from "../../../pages/index";

export default {
  title: "Components/Home/News",
  component: News,
  decorators: [
    (Story) => (
      <Dark>
        <Story />
      </Dark>
    ),
  ],
};

export const NewsComponent = (args, { loaded: { news } }) => (
  <News news={news} />
);

NewsComponent.loaders = [
  async () => {
    let data = await getServerSideProps({ locale: "en" });
    return data.props;
  },
];
