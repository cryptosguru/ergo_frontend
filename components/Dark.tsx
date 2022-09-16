import Head from 'next/head';
import React from 'react';

type Props = {
  children: React.ReactNode;
  desc?: string;
  title?: string;
};

export default function Dark({ children, title }: Props) {
  return (
    <main className="dark:bg-brand-black">
      <Head>
        <meta charSet="utf-8" />
        <title>{`${title} | Ergo Platform`}</title>
      </Head>
      <div className="">{children}</div>
    </main>
  );
}
