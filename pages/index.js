import Link from 'next/link';
import styled from 'styled-components';

const ContainerStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 100px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 0.8rem;
    input {
      font-size: 1rem;
    }
  }
`;

const BlogStyles = styled.h1`
  span:hover {
    cursor: pointer;
  }
`;
const EmailFormStyles = styled.h3`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  justify-content: center;
  background-color: rgba(244, 162, 97, 0.8);
  border: 2px solid var(--lightGrey);
  @media (max-width: 768px) {
    margin: 0;
  }
`;
const InputStyles = styled.input`
  font-size: 2rem;
`;
const LinkStyles = styled.span`
  text-decoration: underline;
  color: var(--orange);
`;

const ButtonStyles = styled.button`
  color: var(--black);
  padding: 1rem;
  align-self: center;
  margin: 1rem;
  width: 50%;
  font-size: 2rem;
  font-weight: 500;
  background-color: var(--lightGrey);
  border: 2px solid black;
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export default function Home() {
  return (
    <ContainerStyles>
      <BlogStyles>
        Future Game of the Year
        <br />
        Check the
        <Link href="/blog">
          <LinkStyles> blog </LinkStyles>
        </Link>
        for updates
      </BlogStyles>

      <EmailFormStyles>
        Get email updates:
        <br />
        <InputStyles type="email" placeholder="epicplayer@example.com" />
        <ButtonStyles>Sign Me Up!</ButtonStyles>
      </EmailFormStyles>
    </ContainerStyles>
  );
}
