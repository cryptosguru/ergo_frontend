import Post from './Post';

type Props = {
  posts?: any;
};

export default function Feed(props: Props) {
  return (
    <div id="Feed" className="flex overflow-x-auto space-x-8 mt-8 no-scrollbar pb-10 relative z-12">
      <div className="hidden md:block md:w-20 flex-shrink-0"></div>
      {props.posts.data?.map((post: any) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.attributes.title}
          author={post.attributes.author}
          subtitle={post.attributes.subtitle}
          tags={post.attributes.tag}
          date={post.attributes.date}
          url={post.attributes.url}
          permalink={post.attributes.permalink}
          type={post.attributes.type}
          content={post.attributes.content}
          image={
            post.attributes.image.data != null
              ? post.attributes.image.data?.attributes?.formats?.medium?.url
              : null
          }
          blogPhoto={post.attributes.blogPhoto}
          authorPhoto={post.attributes.authorPhoto}
        />
      ))}
    </div>
  );
}
