import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import Link from 'next/link';
import { uncheck } from './Nav';

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
      <a onClick={handleSignOut} className="navigation__link">
        Sign Out
      </a>
    </Link>
  );
}
