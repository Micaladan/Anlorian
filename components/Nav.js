import styled from 'styled-components';
import Link from 'next/link';
import Hamburger from './Hamburger';

import 'react-responsive-modal/styles.css';

const NavStyles = styled.nav`
  width: 100%;
  display: flex;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const UlStyles = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: var(--black);
  list-style: none;
  width: 100%;
`;

export default function Nav() {
  return (
    <NavStyles>
      <Hamburger />
      <UlStyles>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/charactersheet">Character Sheet</Link>
        </li>
      </UlStyles>
    </NavStyles>
  );
}
