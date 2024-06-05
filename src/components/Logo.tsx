import styled from 'styled-components';
import colors from '@/styles/color';

const LogoComponent = () => (
  <Container>
    <SubLogo>
      <div>CAFE</div>
      <div>Algorand</div>
      <div>NFT</div>
    </SubLogo>
    <Logo>
      CAN
    </Logo>
    <Square>◆</Square>
  </Container>
);

export default LogoComponent;

const Container = styled.div`
  display: flex;
  justify-content: center; /* 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  margin-top: 7%;
  gap: 20px; /* 요소 간의 간격 조정 */
`;

const SubLogo = styled.div`
color: ${colors.main1};
text-align: right;
font-family: Righteous;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-right: -10px;

  @media (max-width: 390px) {
    font-size: 40px;
  }

  div {
    display: block;
  }
`;

const Logo = styled.div`
color: ${colors.main2};
  font-family: 'Righteous', sans-serif;
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;

  @media (max-width: 390px) {
    font-size: 40px;
  }
`;

const Square = styled.div`
color: ${colors.main1};
    text-align: left;
    font-family: Righteous;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 2%;
    margin-left: -20px;

    @media (max-width: 390px) {
      font-size: 40px;
    }
`;