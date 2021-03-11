import Head from "next/head";
import css from "./layout.module.css";

export interface LayoutProps {
  title: string;
}
export const Layout: React.FC<LayoutProps> = ({ title, children }) => (
  <>
    <Head>
      <title>Github Jobs | {title} </title>
    </Head>
    <div className={css.container}>
      <header className={css.header}>
        <h1>
          <span className={css["header-brand"]}>GitHub</span> Jobs
        </h1>
      </header>
      <main className={css.main}>{children}</main>
      <footer className={css.footer}>Noe Rocha @DevChallenges.io</footer>
    </div>
  </>
);
