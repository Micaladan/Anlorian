import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const ALL_EMAILS_QUERY = gql`
  query ALL_EMAILS_QUERY {
    allEmails {
      name
      email
    }
  }
`;

export default function DashboardEmail() {
  const { data, error, loading } = useQuery(ALL_EMAILS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);
  return (
    <div>
      <p>Email Subscriptions: {data.allEmails.length}</p>
    </div>
  );
}
