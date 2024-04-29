async function getUserPosts(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) {
    return undefined;
  }
  return res.json();
}
//here in fetch we can pass options such as {cache : force-cache or no-store}
//now this force cache is by default, no-store is to tell to never cache the data

export default getUserPosts;
