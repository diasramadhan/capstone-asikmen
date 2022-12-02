import { onAuthStateChanged } from 'firebase/auth';
import React from 'react';
import { auth } from '../utils/firebaseConfig';

export default function useAuth() {
  const [currentUser, setCurrentUser] = React.useState(null);

  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user === null) setCurrentUser(user);
      else if (user.displayName) setCurrentUser(user);
    });

    return () => {
      unsub();
    };
  }, []);

  return currentUser;
}
