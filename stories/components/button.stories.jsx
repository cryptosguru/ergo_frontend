import Button from "../../components/Button";
import Dark from "../../components/Dark";

export default {
  title: "Components/Button",
  component: Button,
  decorators: [
    (Story) => (
      <Dark>
        <Story />
      </Dark>
    ),
  ],
};

const Template = (args) => <Button {...args} />;

export const ButtonWithArrow = Template.bind({});
ButtonWithArrow.args = {
  text: "DIVE IN",
  url: "https://google.com",
  icon: "ArrowRight",
  textColor: "black",
  newTab: false,
  underline: false,
  background: true,
  iconColor: "black",
};

export const ButtonWithoutArrowBlack = Template.bind({});
ButtonWithoutArrowBlack.args = {
  text: "GET ERG",
  url: "https://google.com",
  icon: "none",
  textColor: "black",
  newTab: false,
  underline: false,
  background: true,
  iconColor: "black",
};

export const ButtonWithoutArrowWhite = Template.bind({});
ButtonWithoutArrowWhite.args = {
  text: "DISCOVER",
  url: "https://google.com",
  icon: "none",
  textColor: "white",
  newTab: false,
  underline: false,
  background: true,
  iconColor: "black",
};

export const Link = Template.bind({});
Link.args = {
  text: "REPORT BUGS",
  url: "https://google.com",
  icon: "ArrowRight",
  textColor: "brand-orange",
  newTab: false,
  underline: true,
  background: false,
  iconColor: "orange",
};

export const LinkLong = Template.bind({});
LinkLong.args = {
  text: "Ergo: The Resilient Platform For Contractual Money",
  url: "https://google.com",
  icon: "none",
  textColor: "brand-orange",
  newTab: false,
  underline: true,
  background: false,
  iconColor: "orange",
};
