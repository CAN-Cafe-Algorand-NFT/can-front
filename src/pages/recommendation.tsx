import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const recommendations = [
  { id: 1, name: 'Anam Cafe', address: 'Anam 128-1, Seoul', image: '/images/cafe-image.png', heartIcon: '/images/Heart-image.png' },
  { id: 2, name: 'Good Cafe', address: 'Anam 128-1, Seoul', image: '/images/cafe-image.png', heartIcon: '/images/empty-Heart-image.png' },
  { id: 3, name: 'Jungle Cafe', address: 'Anam 128-1, Seoul', image: '/images/cafe-image.png', heartIcon: '/images/Heart-image.png' },
  { id: 4, name: 'Kang Cafe', address: 'Anam 128-1, Seoul', image: '/images/cafe-image.png', heartIcon: '/images/empty-Heart-image.png' },
  { id: 5, name: 'Cafe Name', address: 'Anam 128-1, Seoul', image: '/images/cafe-image.png', heartIcon: '/images/Heart-image.png' },
];

const Recommendation = () => {
  return (
    <Container>
      <Header>
        <Link href="/home" passHref>
          <BackLink>
            <BackIcon>&lt;</BackIcon>
          </BackLink>
        </Link>
        Recommendation
      </Header>
      <List>
        {recommendations.map((item) => (
          <ListItem key={item.id}>
            <Image src={item.image} alt={item.name} />
            <Info>
              <CafeName>{item.name}</CafeName>
              <CafeAddress>{item.address}</CafeAddress>
            </Info>
            <Icons>
              <Icon src="/images/Coffee-image.png" alt="Coffee" />
              <HeartIcon src={item.heartIcon} alt="Heart" />
            </Icons>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Recommendation;

const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: auto;
`;

const Header = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const BackLink = styled.a`
  color: black;
  text-decoration: none;
  cursor: pointer;
  font-size: 24px;
`;

const BackIcon = styled.span`
  font-size: 24px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;

const Info = styled.div`
  flex: 1;
  margin-left: 10px;
`;

const CafeName = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

const CafeAddress = styled.div`
  font-size: 14px;
  color: #666;
`;

const Icons = styled.div`
  display: flex;
  gap: 5px; /* 아이콘 간격을 좁게 조정 */
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const HeartIcon = styled.img`
  width: 20px; /* 하트 아이콘 크기를 줄임 */
  height: 20px;
`;
