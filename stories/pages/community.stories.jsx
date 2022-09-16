import Community, { getServerSideProps } from "../../pages/community";

export default {
  title: "Pages/Community",
  component: Community,
};

export const CommunityPage = (args, { loaded: { posts, teamMembers } }) => (
  <Community posts={posts} teamMembers={teamMembers} />
);

CommunityPage.loaders = [
  async () => {
    let data = await getServerSideProps({ locale: "en" });
    return data.props;
  },
];
