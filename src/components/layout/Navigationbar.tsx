import Image from 'next/image';
import styled from 'styled-components';
import Link from "next/link";
const Navigationbar = () => {
    return (
        <nav>
            <Container>
                <Navbar>
                    <Buttons>
                        <StyledLink href="/home">
                            <Image src="/assets/images/layout/home.svg" alt="home" width={30} height={41}/>
                        </StyledLink>
                        <StyledLink href="/cafe">
                            <Image src="/assets/images/layout/cafe.svg" alt="cafe" width={30} height={41}/>
                        </StyledLink>
                        <StyledLink href="/map">
                            <Image src="/assets/images/layout/map.svg" alt="map" width={30} height={41}/>
                        </StyledLink>
                        <StyledLink href="/mypage">
                            <Image src="/assets/images/layout/my.svg" alt="my" width={30} height={41}/>
                        </StyledLink>
                    </Buttons>
                </Navbar>
            </Container>
        </nav>
    );
}

export default Navigationbar;

const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Navbar = styled.div`
    bottom: 10px;
    position: fixed;
    width: 393px;
    height: 84px;
    display: flex;
    flex-shrink: 0;
    border-top: 1px solid #E7E7E7;
    background: #FFF;
    justify-content: center;
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap:11px;
    flex-shrink: 0;
`;

const StyledLink = styled(Link)`
    width: 90px;
    display: flex;
    justify-content: center;
`;
