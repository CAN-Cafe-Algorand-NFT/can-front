import Image from 'next/image';
import styled from 'styled-components';
import Link from "next/link";
import {usePathname } from 'next/navigation';

const Navigationbar = () => {

    const pathname = usePathname();

    const isHomePage = pathname === "/home";
  
    const isCafePage = pathname === "/cafe";
  
    const isMapPage = pathname === "/map";
  
    const isMyPage = pathname === "/mypage";

    return (
        <nav>
            <Container>
                <Navbar>
                    <Buttons>
                        <StyledLink href="/home">
                            {isHomePage ? <Image src="/assets/images/layout/s-home.svg" alt="home" width={30} height={41}/> 
                            : <Image src="/assets/images/layout/home.svg" alt="home" width={30} height={41}/>}
                        </StyledLink>
                        <StyledLink href="/cafe">
                            {isCafePage ? <Image src="/assets/images/layout/s-cafe.svg" alt="cafe" width={30} height={41}/>
                            : <Image src="/assets/images/layout/cafe.svg" alt="cafe" width={30} height={41}/>}
                        </StyledLink>
                        <StyledLink href="/map">
                            {isMapPage ? <Image src="/assets/images/layout/s-map.svg" alt="map" width={30} height={41}/>
                            : <Image src="/assets/images/layout/map.svg" alt="map" width={30} height={41}/>}
                        </StyledLink>
                        <StyledLink href="/mypage">
                            {isMyPage ? <Image src="/assets/images/layout/s-my.svg" alt="my" width={30} height={41}/>
                            : <Image src="/assets/images/layout/my.svg" alt="my" width={30} height={41}/>}
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
