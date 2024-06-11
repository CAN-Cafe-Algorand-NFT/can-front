import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import AccountInfo from './AccountInfo';

const ContentContainer = styled.div`
  padding: 20px;
  position: relative;
  width: 375px; // 아이폰 15 프로의 CSS 픽셀 너비
  height: 708px; // 아이폰 15 프로의 CSS 픽셀 높이
  margin: 0 auto; // 중앙 정렬
`;

const Section = styled.div`
  margin-bottom: 20px;
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
  width: 100px;
  height: 100px;
  background-color: #ccc;
  cursor: pointer;
`;

const Link = styled.a`
  display: block;
  margin: 10px 0;
  color: #0070f3;
  cursor: pointer;
`;

const MyPageContent: React.FC = () => {
  const router = useRouter();

  const handleNFTClick = () => {
    router.push('/mypage/nft');
  };

  const handleLikeClick = () => {
    router.push('/mypage/like');
  };

  const handleLogoutClick = () => {
    router.push('/');
  };

  return (
    <ContentContainer>
      <Section>
        <AccountInfo />
      </Section>
      <Section onClick={() => handleNFTClick()}>
        <SectionTitle>My NFT {'>'}</SectionTitle>
        <NFTGrid>
          {["1", "2", "3"].map((nftId) => (
            <NFTItem key={nftId} >
            </NFTItem>
          ))}
        </NFTGrid>
      </Section>
      <Section onClick={() => handleLikeClick()}>
        <SectionTitle>Like {'>'}</SectionTitle>
        <NFTGrid>
          {["1", "2", "3", "4"].map((likeId) => (
            <NFTItem key={likeId} >
            </NFTItem>
          ))}
        </NFTGrid>
      </Section>
      <Link href="https://algoxnft.com" target="_blank" rel="noopener noreferrer">Go to purchase NFT</Link>
      <Section>
        {/* <Link>Service center</Link> */}
        {/* <Link>Settings</Link> */}
        <Link onClick={handleLogoutClick}>Log out</Link>
      </Section>
    </ContentContainer>
  );
};

export default MyPageContent;
