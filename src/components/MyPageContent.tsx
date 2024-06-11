import React from 'react';
import styled from 'styled-components';
import AccountInfo from '../components/AccountInfo';

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
  gap: 10px;
`;

const NFTItem = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ccc;
`;

const Link = styled.a`
  display: block;
  margin: 10px 0;
  color: #0070f3;
  cursor: pointer;
`;

const MyPageContent = () => (
  <ContentContainer>
    <Section>
    <AccountInfo />
    </Section>
    <Section>
      <SectionTitle>My NFT</SectionTitle>
      <NFTGrid>``
        <NFTItem />
        <NFTItem />
        <NFTItem />
      </NFTGrid>
    </Section>
    <Section>
      <SectionTitle>Like</SectionTitle>
      <NFTGrid>
        <NFTItem />
        <NFTItem />
        <NFTItem />
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

export default MyPageContent;
