import { useRef, useState } from 'react';
import { ref, child, update } from 'firebase/database';
import { db } from '../utils/firebaseConfig';

const useUpdateValue = () => {
  const [loading, setLoading] = useState(false);
  const error = useRef(null);
  const success = useRef(null);

  const updateDoc = async (path, value) => {
    setLoading(true);
    try {
      const rootReference = ref(db);
      const dbPath = child(rootReference, path);
      await update(dbPath, value);
      success.current = true;
    } catch (pushError) {
      error.current = pushError.message;
    }
    setLoading(false);
  };

  return {
    loading,
    error: error.current,
    success: success.current,
    updateDoc,
  };
};

export default useUpdateValue;
