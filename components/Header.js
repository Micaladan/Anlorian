import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-14deg);
  a {
    color: white;
    text-decoration: none;
  }
`;

const HeaderStyles = styled.header``;

export default function Header() {
  return (
    <HeaderStyles>
      <div>
        <Logo>
          <Link href="/">Anlorian</Link>
        </Logo>
      </div>
      <Nav />
    </HeaderStyles>
  );
}
