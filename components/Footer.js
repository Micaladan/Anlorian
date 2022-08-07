import styled from 'styled-components';
import CaptureEmail from '../components/CaptureEmail';

const FooterStyles = styled.footer`
  height: min-content;
  width: 100%;
  color: var(--color-white);
  background-color: var(--color-black);
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  clear: both;
  input {
    padding: 1rem;
    border-radius: 100vmax;
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <CaptureEmail />
      <p>&copy; Anlorian {new Date().getFullYear()}</p>
    </FooterStyles>
  );
}
