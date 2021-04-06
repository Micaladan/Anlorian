import styled from 'styled-components';
import Link from 'next/link';
import 'react-responsive-modal/styles.css';

const NavStyles = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: rgba(98, 0, 151, 0.8);
`;

const UlStyles = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style: none;
  width: 100%;
  a {
    color: var(--offWhite);
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <UlStyles>
        <li>
          <Link href="/">Anlorian</Link>
        </li>
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
