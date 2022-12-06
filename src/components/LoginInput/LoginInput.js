import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginInput.scss';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import Swal from 'sweetalert2';
import { auth } from '../../utils/firebaseConfig';
import useInput from '../../hooks/useInput';

function LoginInput() {
  const [email, emailChange] = useInput('');
  const [password, passwordChange] = useInput('');
  const navigate = useNavigate();

  const loginFormHandle = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Gagal!',
        text: err.code,
        confirmButtonColor: '#00adb5',
      });
    }
  };

  return (
    <form onSubmit={loginFormHandle}>
      <label className="d-block text-primary fw-bold" htmlFor="email">
        <div className="d-flex align-items-center">
          <MdEmail className="me-2 fs-2" />
          Email
        </div>
        <input
          className="form-control border-0 rounded-0 border-bottom border-2 shadow-none p-0 pt-1 border-primary"
          type="email"
          name="email"
          id="email"
          onChange={emailChange}
          required
        />
      </label>
      <label className="d-block mt-3 text-primary fw-bold" htmlFor="password">
        <div className="d-flex align-items-center">
          <RiLockPasswordFill className="me-2 fs-2" />
          Password
        </div>
        <input
          className="form-control border-0 rounded-0 border-bottom border-2 shadow-none p-0 pt-1 border-primary"
          type="password"
          name="password"
          id="password"
          onChange={passwordChange}
          required
        />
      </label>
      <button className="btn btn-primary p-2 text-white border-0 mt-3 w-100 login-input__btn-login" type="submit">Login</button>
    </form>
  );
}

export default LoginInput;
