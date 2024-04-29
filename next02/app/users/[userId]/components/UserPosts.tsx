type Props = {
  posts: Post[];
};
export default async function UserPosts({ posts }: Props) {
  const content = posts.map((post) => {
    return (
      <article key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <br />
      </article>
    );
  });
  return content;
}
