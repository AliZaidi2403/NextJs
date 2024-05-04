import Posts from "./components/Posts";

export const revalidate = 10;
//the first refresh or reload after the revalidation number triggers the revalidation while
//it is revalidating it still serves the old version while the second requests give the new version
export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center text-white">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Amaan</span>.
        </span>
      </p>
      <Posts />
    </main>
  );
}
