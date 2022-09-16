import Typography from "../../components/Typography";
import Dark from "../../components/Dark";

export default {
  title: "Components/Typography",
  component: Typography,
  decorators: [
    (Story) => (
      <Dark>
        <Story />
      </Dark>
    ),
  ],
};

export const TypographyComponent = () => <Typography />;
