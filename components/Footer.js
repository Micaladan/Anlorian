import styled from 'styled-components';

const FooterStyles = styled.footer`
  bottom: 0;
  height: 5rem;
  width: 100%;
  color: var(--offWhite);
  background-color: rgb(0, 0, 0);
  padding: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
`;

export default function Footer() {
  return (
    <FooterStyles>
      <p>&copy; Anlorian {new Date().getFullYear()}</p>
    </FooterStyles>
  );
}
