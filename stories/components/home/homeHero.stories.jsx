import HomeHero from "../../../components/home/HomeHero";
import Dark from "../../../components/Dark";

export default {
  title: "Components/Home/HomeHero",
  component: HomeHero,
  decorators: [
    (Story) => (
      <Dark>
        <Story />
      </Dark>
    ),
  ],
};

const Template = (args) => <HomeHero {...args} />;

export const HomeHeroComponent = Template.bind({});
