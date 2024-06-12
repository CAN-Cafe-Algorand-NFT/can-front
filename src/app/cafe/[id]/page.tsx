"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';
import { recommendations } from '../../../components/recommendationData';

const CafeDetailPage = () => {
  const { id } = useParams();
  const cafe = recommendations.find((c) => c.id === Number(id));

  if (!cafe) {
    return <p>Cafe not found</p>;
  }

  return (
    <Container>
      <Image src={cafe.image} alt={cafe.name} />
      <Info>
        <CafeName>{cafe.name}</CafeName>
        <CafeAddress>1st floor, 123 Anam-ro, Dongdaemun-gu, Seoul</CafeAddress>
        <DetailItem>12:00 - 22:00 | 21:30 Last order</DetailItem>
        <DetailItem>📞 +82 10-1234-5678</DetailItem>
        <DetailItem>📧 @cafe_cafa</DetailItem>
        <DetailItem>Parking available | WiFi provided</DetailItem>
        <Link href="#">Go to purchase NFT &rarr;</Link>
      </Info>
      <CouponSection>
        <CouponText>
          We&apos;ll give you a <CouponLink href="#">coupon for one free drink</CouponLink> on your first visit!
        </CouponText>
        <LevelInfo>
          <LevelTitle>Level 1</LevelTitle>
          <ProgressContainer>
            <ProgressBar progress={60} />
            <ProgressText>300/500</ProgressText>
          </ProgressContainer>
          <NextLevelText>200 ALOGOs to next level</NextLevelText>
        </LevelInfo>
      </CouponSection>
      <ReviewSection>
        <ReviewTitle>Review</ReviewTitle>
        <ReviewCard>
          <ReviewText>
            This is a cafe I go to every day. Dogs are allowed and the owner is friendly.
          </ReviewText>
          <ReviewUser>User Name</ReviewUser>
        </ReviewCard>
        <ReviewCard>
          <ReviewText>
            This cafe is a cafe where you can get discounts through NFT. The cafe is cozy and the coffee is ...
          </ReviewText>
          <ReviewUser>User Name</ReviewUser>
        </ReviewCard>
      </ReviewSection>
      <MapSection>
        <ReviewTitle>MAP</ReviewTitle>
        <MapImage src="/images/map-image.png" alt="Map" />
      </MapSection>
    </Container>
  );
};

export default CafeDetailPage;

const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: auto;
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const Info = styled.div`
  margin-top: 20px;
  text-align: left;
`;

const CafeName = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const CafeAddress = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const DetailItem = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;

const Link = styled.a`
  color: #0070f3;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
`;

const CouponSection = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  text-align: left;
`;

const CouponText = styled.p`
  font-size: 16px;
`;

const CouponLink = styled.a`
  color: #0070f3;
  text-decoration: none;
`;

const LevelInfo = styled.div`
  margin-top: 10px;
`;

const LevelTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ProgressBar = styled.div<{ progress: number }>`
  width: ${({ progress }) => progress}%;
  height: 10px;
  background-color: #00cfff;
  border-radius: 5px;
`;

const ProgressText = styled.span`
  margin-left: 10px;
  font-size: 14px;
`;

const NextLevelText = styled.p`
  font-size: 14px;
  color: #666;
`;

const ReviewSection = styled.div`
  margin-top: 20px;
`;

const ReviewTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const ReviewCard = styled.div`
  padding: 10px;
  background-color: #f1f1f1;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const ReviewText = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;

const ReviewUser = styled.p`
  font-size: 12px;
  color: #666;
  text-align: right;
`;

const MapSection = styled.div`
  margin-top: 20px;
`;

const MapImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;
