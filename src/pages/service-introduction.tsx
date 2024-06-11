import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const ServiceIntroduction = () => {
  return (
    <Container>
      <Header>
        <BackLink href="/home"><BackIcon>&lt;</BackIcon></BackLink>
        <Title>Service Introduction</Title>
      </Header>
      <Content>
        <Introduction>
          <Highlight>CAN(Cafe Algorand NFT)</Highlight> app is a platform that helps users easily find and visit partner cafes.
        </Introduction>
        <Step>
          <StepImage src="/images/map-image.png" alt="Map" />
          <StepText>1. View the locations of partner cafes at a glance on the map.</StepText>
        </Step>
        <Step>
          <StepImage src="/images/search-image.png" alt="Search" />
          <StepText>2. Quickly find desired cafes using search and filtering functions.</StepText>
        </Step>
        <StepRow>
          <StepTextColumn>
            <StepText>3. Check detailed information and services provided by each cafe.</StepText>
            <StepText>4. Provide reliable information on available items and services.</StepText>
            <StepText>5. Manage frequently visited cafes and easily share with your friends/followers.</StepText>
          </StepTextColumn>
          <Step>
            <StepImage src="/images/info-image.png" alt="Information" />
          </Step>
        </StepRow>
        <FinalText>
          Our service offers users an optimal cafe exploration experience. Utilize our user-friendly search and filtering features to quickly find the cafes that meet your preferences. Manage your favorite cafes and stay updated with the latest information.
        </FinalText>
        <FinalText>
          With the CAN (Cafe Algorand NFT) app, exploring new cafes is always a joy!
        </FinalText>
        <CenteredLink href="/home" passHref>
          <StartButton>Start Now!</StartButton>
        </CenteredLink>
      </Content>
    </Container>
  );
};

export default ServiceIntroduction;

const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: auto;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const BackLink = styled.a`
  color: black; /* 검정색으로 변경 */
  text-decoration: none;
  cursor: pointer;
  margin-right: 10px;
`;

const BackIcon = styled.span`
  font-size: 24px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;


const Introduction = styled.p`
  font-size: 16px;
`;

const Highlight = styled.span`
  font-weight: bold;
  color: #0070f3;
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StepRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
`;

const StepTextColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px; /* 텍스트가 왼쪽에 위치하도록 조정 */
`;

const StepImage = styled.img`
  width: 100%;
  max-width: 300px;
  margin-bottom: 10px;
`;

const StepImageSmall = styled.img`
  width: 100px;
  height: auto;
`;

const StepText = styled.p`
  font-size: 14px;
`;

const StepDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Detail = styled.p`
  font-size: 14px;
  margin: 0;
`;

const FinalText = styled.p`
  font-size: 14px;
  text-align: center;
`;

const CenteredLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

const StartButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #00cfff;
  color: white;
  text-align: center;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  margin-top: 20px;
`;
