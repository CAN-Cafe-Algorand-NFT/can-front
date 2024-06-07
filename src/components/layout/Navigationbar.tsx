import Image from 'next/image';
import styled from 'styled-components';

const Navigationbar = () => {

    return (
        <nav>
            <Container>
                <Navbar>
                </Navbar>
            </Container>
        </nav>
    );
}

export default Navigationbar;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Navbar = styled.div`
    width: 393px;
    height: 84px;
    flex-shrink: 0;
    border-top: 1px solid #E7E7E7;
    background: #FFF;
`;
