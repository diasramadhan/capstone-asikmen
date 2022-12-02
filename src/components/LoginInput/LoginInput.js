import React from 'react';
import './LoginInput.scss';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../utils/firebaseConfig';
import useInput from '../../hooks/useInput';

function LoginInput() {
  const [email, emailChange] = useInput('');
  const [password, passwordChange] = useInput('');

  const loginFormHandle = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      alert(err.code);
    }
  };

  return (
    <form onSubmit={loginFormHandle}>
      <label className="d-block text-primary fw-bold" htmlFor="email">
        Email
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
        Password
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
