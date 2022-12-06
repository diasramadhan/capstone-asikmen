import { useState, useEffect, useRef } from 'react';
import {
  getDatabase, ref, child, get
} from 'firebase/database';
import firebaseApp from '../utils/firebaseConfig';

const useGetValue = (path) => {
  const [isLoading, setIsLoading] = useState(true);
  const snapshot = useRef(null);
  const error = useRef(null);

  const getValue = async () => {
    try {
      const database = getDatabase(firebaseApp);
      const rootReference = ref(database);
      const dbGet = await get(child(rootReference, path));
      const dbValue = dbGet.val();
      snapshot.current = dbValue;
    } catch (getError) {
      error.current = getError.message;
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getValue();
  }, []);

  return { isLoading, snapshot: snapshot.current, error: error.current };
};

export default useGetValue;
