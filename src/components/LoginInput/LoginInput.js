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
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user.user);
    } catch (err) {
      alert(err.code);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img className="img-fluid p-5" src="./img/health-illness.png" alt="ilustrasi kesehatan mental" />
        </div>
        <div className="col d-flex flex-column justify-content-center">
          <h1 className="text-center fs-3">Login</h1>
          <form onSubmit={loginFormHandle}>
            <label className="d-block text-primary" htmlFor="email">
              Email
              <input
                className="form-control border-0 rounded-0 border-bottom border-2 shadow-none px-0 border-primary"
                type="email"
                name="email"
                id="email"
                onChange={emailChange}
              />
            </label>
            <label className="d-block mt-3 text-primary" htmlFor="password">
              Password
              <input
                className="form-control border-0 rounded-0 border-bottom border-2 shadow-none px-0 border-primary"
                type="password"
                name="password"
                id="password"
                onChange={passwordChange}
              />
            </label>
            <button className="btn btn-primary p-2 text-white border-0 mt-3 w-100 login-input__btn-login" type="submit">Login</button>
          </form>
          <p className="mt-3">
            Belum punya akun? daftar
            <a className="text-decoration-none text-primary" href="#"> disini</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginInput;
