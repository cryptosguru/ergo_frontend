import Post, { getServerSideProps } from "../../pages/blog/[id]";

export default {
  title: "Pages/Post",
  component: Post,
};

export const PostPage = (args, { loaded: { post } }) => (
  <Post {...args} post={post} />
);

PostPage.story = {
  parameters: {
    nextRouter: {
      path: "/blog/[id]",
      asPath: "/blog/184",
      query: {
        id: "184",
      },
    },
  },
};

PostPage.loaders = [
  async () => {
    let data = await getServerSideProps({ query: { id: 184 } });
    return data.props;
  },
];
