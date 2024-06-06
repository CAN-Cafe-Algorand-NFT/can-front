"use client";

import React, { useState } from 'react';
import styled from 'styled-components';
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [account, setAccount] = useState(null);
  const router = useRouter();

  const handleMetaMaskLogin = async () => {
    const provider = await detectEthereumProvider();

    if (provider) {
      try {
        const accounts = await provider.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        const web3 = new Web3(provider);
        console.log('Logged in with MetaMask:', accounts[0]);

        // 로그인이 완료되면 home으로
        router.push('/home');
      } catch (error) {
        console.error('User rejected the request:', error);
      }
    } else {
      console.error('MetaMask is not installed. Please install MetaMask and try again.');
    }
  };

  return (
    <Container>
      <LoginButton onClick={handleMetaMaskLogin}>
        Log in with Metamask
      </LoginButton>
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
