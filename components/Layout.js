import Head from "next/head";

export const Layout = ({ title, children, className }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`h-full w-full min-h-screen ${className}`}>{children}</main>
    </div>
  );
};
