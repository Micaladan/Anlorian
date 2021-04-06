import styled from 'styled-components';

const FooterStyles = styled.footer`
  bottom: 0;
  height: 5rem;
  width: 100%;
  color: var(--offWhite);
  background-color: rgb(0, 0, 0);
  padding: 1.5 rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Footer() {
  return (
    <FooterStyles>
      <p>&copy; Anlorian {new Date().getFullYear()}</p>
    </FooterStyles>
  );
}
