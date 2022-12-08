import { useRef } from 'react';
import {
  ref, set
} from 'firebase/database';
import { db } from '../utils/firebaseConfig';

const useCreateValue = () => {
//   const [loading, setLoading] = useState(false);
  const error = useRef(null);
  const success = useRef(null);

  const pushValue = async (path, value, id) => {
    try {
      set(ref(db, path + id), value);
      success.current(true);
    } catch (pushError) {
      error.current = pushError.message;
    }
  };

  return { pushValue };
};

export default useCreateValue;
