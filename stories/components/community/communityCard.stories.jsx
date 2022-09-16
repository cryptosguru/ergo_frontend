import CommunityCard from "../../../components/community/CommunityCard";
import Dark from "../../../components/Dark";

export default {
  title: "Components/Community/CommunityCard",
  component: CommunityCard,
  decorators: [
    (Story) => (
      <Dark>
        <Story />
      </Dark>
    ),
  ],
};

const Template = (args) => <CommunityCard {...args} />;

export const CommunityCardComponent = Template.bind({});
CommunityCardComponent.args = {
  title: "Github",
  icon: "Github",
  text: "Explore our development community on Github.",
};
