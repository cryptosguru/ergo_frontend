import Head from 'next/head';
import Footer from './Footer';
import Navigation from './Navigation';
import React from 'react';

type Props = {
  children: React.ReactNode;
  desc?: string;
  title?: string;
  footer?: boolean;
};

export default function Layout({ children, title, footer = true }: Props) {
  return (
    <main className="dark:bg-brand-black overflow-hidden">
      <Head>
        <meta charSet="utf-8" />
        <title>{`${title} | Ergo Platform`}</title>
      </Head>
      <Navigation />
      <div className="">{children}</div>
      {footer && <Footer />}
    </main>
  );
}
