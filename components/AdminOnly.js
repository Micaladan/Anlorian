import { useUser } from './User';

export default function ({ children }) {
  const me = useUser();
  {
    {
      console.log(me);
    }
    if (!me) return null;
    if (JSON.stringify(me.role).includes('canManageUsers')) return children;
    return null;
  }
}
