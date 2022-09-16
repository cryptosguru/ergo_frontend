import GetErg, { getServerSideProps } from "../../pages/get-erg";

export default {
  title: "Pages/GetErg",
  component: GetErg,
};

export const GetErgPage = (args, { loaded: { exchanges } }) => (
  <GetErg exchanges={exchanges} />
);

GetErgPage.loaders = [
  async () => {
    let data = await getServerSideProps({ locale: "en" });
    return data.props;
  },
];
