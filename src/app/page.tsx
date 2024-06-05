"use client"
/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
import Layout from './layout';
import LogoComponent from '../components/Logo';

const HomePage = () => (
  <Layout>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    </Head>
    <LogoComponent />
  </Layout>
);

export default HomePage;
