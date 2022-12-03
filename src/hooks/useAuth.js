import { onAuthStateChanged } from 'firebase/auth';
import React from 'react';
import { auth } from '../utils/firebaseConfig';

export default function useAuth() {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setLoading(true);
      if (user === null) setCurrentUser(user);
      else if (user.displayName) setCurrentUser(user);
      setLoading(false);
    });

    return () => {
      unsub();
    };
  }, []);

  return [currentUser, loading];
}
