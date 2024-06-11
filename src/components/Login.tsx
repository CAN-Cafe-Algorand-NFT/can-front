"use client";

import React from 'react';
import styled from 'styled-components';
import { PeraWalletConnect } from '@perawallet/connect';
import { useRouter } from 'next/navigation';
import { useAccount } from '../components/AccountContext';

const Login = () => {
  const { account, setAccount } = useAccount();
  const router = useRouter();
  const peraWallet = new PeraWalletConnect();

  const handlePeraWalletLogin = async () => {
    try {
      const accounts = await peraWallet.connect();
      setAccount(accounts[0]);
      console.log('Logged in with Pera Wallet:', accounts[0]);

      // 로그인이 완료되면 home으로
      router.push('/home');
    } catch (error) {
      console.error('User rejected the request:', error);
    }
  };

  return (
    <Container>
      <LoginButton onClick={handlePeraWalletLogin}>
        Log in with Pera Wallet
      </LoginButton>
      {account && <AccountInfo>Logged in as: {account}</AccountInfo>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff;
`;

const LoginButton = styled.button`
  width: 80%;
  padding: 10px;
  margin: 10px 0;
  background-color: #00CFFF;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #00BFFF;
  }
`;

const AccountInfo = styled.p`
  margin-top: 20px;
  color: #333;
`;

export default Login;
