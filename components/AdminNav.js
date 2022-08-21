import styled from 'styled-components';
import Link from 'next/link';
import { useUser } from './User';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Nav() {
  const user = useUser();

  const AdminNavStyles = styled.nav`
    background-color: rgb(197, 114, 76);
    width: 100%;
    display: flex;
    align-items: center;
  `;

  const AdminBrandStyles = styled.span`
    background-color: white;
    color: rgb(197, 114, 76);
    padding: 0.5rem;
    margin-right: 1rem;
    aspect-ratio: 1;
  `;

  return (
    <AdminNavStyles>
      <AdminBrandStyles>
        <FontAwesomeIcon icon="fa-solid fa-martini-glass-citrus" />
      </AdminBrandStyles>
      <span>This is the admin only navbar</span>
    </AdminNavStyles>
  );
}
