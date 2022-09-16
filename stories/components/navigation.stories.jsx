import Navigation from "../../components/Navigation";
import Dark from "../../components/Dark";
import { ThemeProvider } from "next-themes";

export default {
  title: "Components/Navigation",
  component: Navigation,
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class">
        <Dark>
          <Story />
        </Dark>
      </ThemeProvider>
    ),
  ],
};

const Template = (args) => <Navigation enableLanguages={false} />;

export const NavigationComponent = Template.bind({});
