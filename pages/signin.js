import styled from 'styled-components';
import Register from '../components/Register';
import RequestReset from '../components/RequestReset';
import SignIn from '../components/SignIn';

const GridStyles = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, min-max(30rem, 1fr));
  grid-gap: 2rem;
`;

export default function signin() {
  return (
    <GridStyles>
      <SignIn></SignIn>
      {/* Hiding register component  for now
      <Register></Register> */}
      <RequestReset></RequestReset>
    </GridStyles>
  );
}
