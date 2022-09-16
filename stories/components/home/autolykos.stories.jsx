import Autolykos from "../../../components/home/Autolykos";
import Dark from "../../../components/Dark";

export default {
  title: "Components/Home/Autolykos",
  component: Autolykos,
  decorators: [
    (Story) => (
      <Dark>
        <Story />
      </Dark>
    ),
  ],
};

const Template = (args) => <Autolykos {...args} />;

export const AutolykosComponent = Template.bind({});
