import HomeInfo from "../../../components/home/HomeInfo";
import Dark from "../../../components/Dark";

export default {
  title: "Components/Home/HomeInfo",
  component: HomeInfo,
  decorators: [
    (Story) => (
      <Dark>
        <Story />
      </Dark>
    ),
  ],
};

const Template = (args) => <HomeInfo {...args} />;

export const HomeInfoComponent = Template.bind({});
