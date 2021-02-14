import styled from 'styled-components';
import Link from 'next/link';

const UlStyles = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
`;

const NavStyles = styled.nav`
  width: 100%;
`;

export default function Nav() {
  return (
    <NavStyles>
      <UlStyles>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </UlStyles>
    </NavStyles>
  );
}
