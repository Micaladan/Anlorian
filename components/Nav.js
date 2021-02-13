import styled from 'styled-components';
import Link from 'next/link';

const UlStyles = styled.ul`
  list-style: none;
`;

export default function Nav() {
  return (
    <nav>
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
    </nav>
  );
}
