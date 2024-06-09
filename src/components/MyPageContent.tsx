import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import AccountInfo from './AccountInfo';

const ContentContainer = styled.div`
  padding: 20px;
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

  const handleNFTClick = (nftId: string) => {
    router.push(`/mypage/nft/${nftId}`);
  };

  const handleLikeClick = (likeId: string) => {
    router.push(`/mypage/like/${likeId}`);
  };

  return (
    <ContentContainer>
      <Section>
        <AccountInfo />
      </Section>
      <Section>
        <SectionTitle>My NFT</SectionTitle>
        <NFTGrid>
          {["1", "2", "3"].map((nftId) => (
            <NFTItem key={nftId} onClick={() => handleNFTClick(nftId)}>
              NFT {nftId}
            </NFTItem>
          ))}
        </NFTGrid>
      </Section>
      <Section>
        <SectionTitle>Like</SectionTitle>
        <NFTGrid>
          {["1", "2", "3", "4"].map((likeId) => (
            <NFTItem key={likeId} onClick={() => handleLikeClick(likeId)}>
              {/* <img src={`/images/cafe${likeId}.jpg`} alt={`Cafe ${likeId}`} /> */}
              <div>Cafe Name</div>
              <div>Anam 182-1, Seoul</div>
            </NFTItem>
          ))}
        </NFTGrid>
      </Section>
      <Link>Go to purchase NFT</Link>
      <Section>
        <Link>Setting</Link>
        <Link>Service center</Link>
        <Link>Log out</Link>
      </Section>
    </ContentContainer>
  );
};

export default MyPageContent;
