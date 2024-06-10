"use client"

import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import cafeImage from '../../../../public/assets/images/cafeImage.svg';

const ContentContainer = styled.div`
  padding: 20px;
`;

const SectionTitle = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const LikeGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const LikeItem = styled.div`
  width: 200px;
  height: 200px;
  /* background-color: #ccc; */
  border: solid;
  cursor: pointer;
`;

const Like: React.FC = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/mypage');
  };

  return (
    <ContentContainer>
      <SectionTitle onClick={handleBackClick}>{"<"} Like</SectionTitle>
      <LikeGrid>
        {["1", "2", "3", "4"].map((likeId) => (
          <LikeItem key={likeId}>
            <Image src={cafeImage} alt="Cafe Image" />
            <div>
              <div>Cafe Name</div>
              <div>Cafe Address</div>
            </div>
          </LikeItem>
        ))}
      </LikeGrid>
    </ContentContainer>
  );
};

export default Like;
