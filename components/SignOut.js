import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import Link from 'next/link';
import { uncheck } from './Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SIGN_OUT_MUTATION = gql`
  mutation {
    endSession
  }
`;

export default function SignOut() {
  const [signout] = useMutation(SIGN_OUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  function handleSignOut() {
    uncheck();

    signout();
  }
  return (
    <Link href="/">
      <a title="Sign Out" onClick={handleSignOut} className="tooltip focus">
        <FontAwesomeIcon icon="fa-solid fa-door-open" />
      </a>
    </Link>
  );
}
