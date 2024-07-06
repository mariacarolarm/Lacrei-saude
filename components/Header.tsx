import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';

const HeaderWrapper = styled.header`
  background-color: rgb(241, 255, 235);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  background-color: #018762;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #004c3f;
  }
`;

const CustomLink = styled(Link)`
  text-decoration: none;
`;

const Header: React.FC = () => (
  <HeaderWrapper>
    <LogoWrapper>
      <Image src="/images/logo.svg" alt="Lacrei Saúde" width={200} height={50} />
    </LogoWrapper>
    <Nav>
    <Link href="/" >
      <Button>Home</Button>
    </Link>
    <Link href="/about" >
      <Button>Quem Somos</Button>
    </Link>
    </Nav>
  </HeaderWrapper>
);

export default Header;
