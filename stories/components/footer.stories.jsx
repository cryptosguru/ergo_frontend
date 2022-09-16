import Footer from "../../components/Footer";
import Dark from "../../components/Dark";

export default {
  title: "Components/Footer",
  component: Footer,
  decorators: [
    (Story) => (
      <Dark>
        <Story />
      </Dark>
    ),
  ],
};

const Template = (args) => <Footer />;

export const FooterComponent = Template.bind({});
