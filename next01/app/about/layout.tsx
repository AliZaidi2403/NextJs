import style from "./style.module.css";
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>About Navbar</nav>
      <main className={style.main}>{children}</main>
    </>
  );
}
