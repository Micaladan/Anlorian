import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const Logo = styled.h1`
  font-size: 4rem;
  z-index: 2;
  letter-spacing: 0.7rem;
  font-family: 'Berkshire Swash', cursive;
  padding-left: 1rem;
  a {
    color: white;
  }
`;

const HeaderStyles = styled.header`
  background-image: url('https://images.unsplash.com/photo-1584968173934-bc0b588eb806?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');
  background-position: center;
  background-size: cover;
  h1 {
    margin: 0;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div>
        <Logo>
          <Link href="/">Anlorian</Link>&#127922; &#127922; &#127922;
        </Logo>
      </div>
      <Nav />
    </HeaderStyles>
  );
}
