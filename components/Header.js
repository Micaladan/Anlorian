import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-14deg);
  letter-spacing: 0.7rem;
  font-family: 'Berkshire Swash', cursive;
  a {
    color: white;
  }
`;

const HeaderStyles = styled.header``;

export default function Header() {
  return (
    <HeaderStyles>
      <div>
        <Logo>
          <Link href="/"> &#127922; Anlorian</Link>
        </Logo>
      </div>
      <Nav />
    </HeaderStyles>
  );
}
