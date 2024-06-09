"use client"
/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
import LogoComponent from '../components/Logo';
import Navigationbar from '@/components/layout/Navigationbar';
import dynamic from 'next/dynamic';
import Layout from './layout';

const Login = dynamic(() => import('../components/Login'), { ssr: false });
const HomePage = () => (
  <Layout>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    </Head>
    <LogoComponent />
    <Navigationbar />
    <Login />
  </Layout>
);

export default HomePage;