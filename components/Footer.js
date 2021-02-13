import styled from 'styled-components';

const FooterStyles = styled.footer`
  bottom: 0;
  height: 5rem;
  width: 100%;
  color: white;
  background-color: rgba(25, 25, 25, 1);
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
