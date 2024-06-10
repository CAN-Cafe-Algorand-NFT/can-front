"use client"

import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

const ContentContainer = styled.div`
  padding: 20px;
`;

const SectionTitle = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const NFTGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const NFTItem = styled.div`
  width: 200px;
  height: 200px;
  background-color: #ccc;
  cursor: pointer;
`;

const MyNFT: React.FC = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/mypage');
  };

  return (
    <ContentContainer>
      <SectionTitle onClick={handleBackClick}>{"<"} My NFT</SectionTitle>
      <NFTGrid>
        {["1", "2", "3"].map((nftId) => (
          <NFTItem key={nftId}>
          </NFTItem>
        ))}
      </NFTGrid>
    </ContentContainer>
  );
};

export default MyNFT;
