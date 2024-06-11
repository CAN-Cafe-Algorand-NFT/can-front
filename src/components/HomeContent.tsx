"use client";

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PeraWalletConnect } from '@perawallet/connect';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io'; // Importing arrow down icon
import Logo1Component from './Logo1';
import { useAccount } from './AccountContext';
import Navigationbar from './layout/Navigationbar';  // Navigationbar를 import 합니다

const HomeContent = () => {
  const { account, setAccount } = useAccount();
  const [clientSideAccount, setClientSideAccount] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setClientSideAccount(account);
  }, [account]);

  const handleAccountClick = () => {
    setIsModalOpen(true);
  };

  const handleChangeWallet = async () => {
    try {
      const peraWallet = new PeraWalletConnect();
      const accounts = await peraWallet.connect();
      setAccount(accounts[0]);
      setClientSideAccount(accounts[0]);
      setIsModalOpen(false); // Close the modal after changing the wallet
    } catch (error) {
      console.error('User rejected the request:', error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <AccountInfoContainer onClick={handleAccountClick}>
        <AccountButton>
          <AccountDetails>
            <AccountLabel>Account1</AccountLabel>
            {clientSideAccount ? clientSideAccount : 'INH6KTPSCJRNX...2CLBD7MT6G37C4'}
          </AccountDetails>
          <ArrowIcon>
            <IoIosArrowDown />
          </ArrowIcon>
        </AccountButton>
      </AccountInfoContainer>
      <ServiceIntroCard>
        <Logo1Component />
        <Link href="/service-introduction" passHref>
          <ServiceLink>Service Introduction &rarr;</ServiceLink>
        </Link>
      </ServiceIntroCard>
      <Section>
        <Link href="/recommendation" passHref>
          <SectionTitle>Recommendation &gt;</SectionTitle>
        </Link>
        <RecommendationGrid>
          <Link href={`/cafe/1`} passHref>
            <StyledLink>
              <RecommendationItem>
                <Image src="/images/cafe-image.png" alt="Cafe" />
                <CafeInfo>
                  <CafeName>Cafe Name</CafeName>
                  <CafeAddress>Anam 1827-5, Seoul</CafeAddress>
                </CafeInfo>
              </RecommendationItem>
            </StyledLink>
          </Link>
          <Link href={`/cafe/2`} passHref>
            <StyledLink>
              <RecommendationItem>
                <Image src="/images/cafe-image.png" alt="Cafe" />
                <CafeInfo>
                  <CafeName>Cafe Name</CafeName>
                  <CafeAddress>Anam 182-1, Seoul</CafeAddress>
                </CafeInfo>
              </RecommendationItem>
            </StyledLink>
          </Link>
        </RecommendationGrid>
      </Section>
      <NavigationContainer>
        <Navigationbar />  {/* Navigationbar를 추가합니다 */}
      </NavigationContainer>

      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <AccountDetails>
                <AccountCircle />
                <AccountText>
                  <div>Account 1</div>
                  <div>{clientSideAccount}</div>
                </AccountText>
              </AccountDetails>
            </ModalHeader>
            <ChangeWalletButton onClick={handleChangeWallet}>Change Wallet</ChangeWalletButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default HomeContent;

const Container = styled.div`
  padding: 20px;
  width: 100%;
`;

const AccountInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  cursor: pointer;
`;

const AccountButton = styled.div`
  background-color: #6d4c41;
  color: #fff;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
`;

const AccountDetails = styled.div`
  display: flex;
  align-items: center;
`;

const AccountLabel = styled.div`
  margin-right: 10px;
`;

const ArrowIcon = styled.div`
  margin-left: 10px;
`;

const ServiceIntroCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ServiceLink = styled.a`
  margin-top: 10px;
  color: #0070f3;
  cursor: pointer;
  font-size: 14px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.a`
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 16px;
  color: black; /* 검정색으로 스타일링 */
  text-decoration: none;
  cursor: pointer;
`;

const RecommendationGrid = styled.div`
  display: flex;
  gap: 10px;
`;

const RecommendationItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  width: 150px;
`;

const StyledLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none; /* 추가: 링크 텍스트 장식 제거 */
  color: inherit; /* 추가: 텍스트 색상 상속 */
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const CafeInfo = styled.div`
  margin-top: 10px;
  text-align: center;
`;

const CafeName = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

const CafeAddress = styled.div`
  font-size: 12px;
  color: #666;
`;

const NavigationContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
  border-top: 1px solid #E7E7E7;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 80%;
  max-width: 400px;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const AccountCircle = styled.div`
  width: 40px;
  height: 40px;
  background: #ccc;
  border-radius: 50%;
  margin-right: 10px;
`;

const AccountText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChangeWalletButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #00CFFF;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #00BFFF;
  }
`;
