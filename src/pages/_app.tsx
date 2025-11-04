import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout';
import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || "Our Company";
  
  return (
    <>
      <Head>
        <meta name="description" content={`${companyName} provides fast, flexible business financing solutions to help your business grow.`} />
      </Head>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </>
  );
} 