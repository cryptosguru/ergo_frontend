import Post from "../../components/shared/Post";
import Dark from "../../components/Dark";

export default {
  title: "Components/Post",
  component: Post,
  decorators: [
    (Story) => (
      <Dark>
        <Story />
      </Dark>
    ),
  ],
};

const Template = (args) => <Post {...args} />;

export const PostComponent = Template.bind({});
PostComponent.args = {
  title: "Testnet 2.2.0 released",
  subtitle: "Sigma-State language updated, new API methods",
  author: "",
  date: "2019-06-27T00:00:00.000Z",
  image: "",
  tags: "",
  url: "/discover/tag/v2.2.0",
};
