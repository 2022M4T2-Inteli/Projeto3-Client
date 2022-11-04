// Base do layout de todas as telas

import Head from "next/head";

export const Layout = ({ title, children, className }) => {
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Beacon School` : "Beacon School"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`h-full w-full min-h-screen bg-[#F5F9FD] ${className}`}>{children}</main>
    </div>
  );
};
