import ContributeForm from "../../components/shared/ContributeForm";
import Dark from "../../components/Dark";

export default {
  title: "Components/ContributeForm",
  component: ContributeForm,
  decorators: [
    (Story) => (
      <Dark>
        <Story />
      </Dark>
    ),
  ],
};

const Template = (args) => <ContributeForm />;

export const ContributeFormComponent = Template.bind({});
