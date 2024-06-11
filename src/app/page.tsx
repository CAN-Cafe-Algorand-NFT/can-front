"use client"
/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
import LogoComponent from '../components/Logo';
import Navigationbar from '@/components/layout/Navigationbar';
import dynamic from 'next/dynamic';
import Layout from './layout';
import { usePathname } from 'next/navigation';

const Login = dynamic(() => import('../components/Login'), { ssr: false });
const HomePage = () => {
  const pathname = usePathname();

  const isHomePage = pathname === "/home";
  const isCafePage = pathname === "/cafe";
  const isMapPage = pathname === "/map";
  const isMyPage = pathname === "/mypage";

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <LogoComponent />
      {(isHomePage || isCafePage || isMapPage || isMyPage) && <Navigationbar />}
      <Login />
    </Layout>
  );
};

export default HomePage;
