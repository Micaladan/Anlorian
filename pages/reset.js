import RequestReset from '../components/RequestReset';
import Reset from '../components/Reset';

export default function ResetPage({ query }) {
  if (!query?.token) {
    return (
      <div>
        <p>Sorry, you must supply a token</p>
        <RequestReset></RequestReset>
      </div>
    );
  }
  return (
    <div>
      <p>Reset Your Password!</p>
      <Reset token={query.token}></Reset>
    </div>
  );
}
