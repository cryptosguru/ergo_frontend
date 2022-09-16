import Highlights from "../../../components/home/Highlights";
import Dark from "../../../components/Dark";

export default {
  title: "Components/Home/Highlights",
  component: Highlights,
  decorators: [
    (Story) => (
      <Dark>
        <Story />
      </Dark>
    ),
  ],
};

const Template = (args) => <Highlights {...args} />;

export const HighlightsComponent = Template.bind({});
