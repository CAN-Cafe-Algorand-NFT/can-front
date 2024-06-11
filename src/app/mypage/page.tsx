"use client"

import React from 'react';
import MyPageContent from '../../components/MyPageContent';
import RootLayout from '../layout';
import Navigationbar from '../../components/layout/Navigationbar';
import WalletInfoBar from '../../components/layout/WalletInfoBar';

const MyPage = () => {
  return (
    <RootLayout>
      <WalletInfoBar />
      <MyPageContent />
      <Navigationbar />
    </RootLayout>
  );
};

export default MyPage;

WalletInfoBar