import React from 'react';
import '../LoginInput/LoginInput.scss';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../utils/firebaseConfig';
import useInput from '../../hooks/useInput';

function RegisterInput() {
  const [name, nameChange] = useInput('');
  const [email, emailChange] = useInput('');
  const [password, passwordChange] = useInput('');
  const [passwordConfirm, passwordConfirmChange] = useInput('');

  const registerFormHandle = async (e) => {
    e.preventDefault();
    try {
      if (password === passwordConfirm) {
        await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        if (auth.currentUser) {
          alert('Register berhasil');
        }
      } else {
        alert('Konfirmasi password tidak sama!');
      }
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
          <h1 className="text-center fs-3">Register</h1>
          <form onSubmit={registerFormHandle}>
            <label className="d-block text-primary" htmlFor="name">
              Nama
              <input
                className="form-control border-0 rounded-0 border-bottom border-2 shadow-none px-0 border-primary"
                type="text"
                id="name"
                onChange={nameChange}
              />
            </label>
            <label className="d-block mt-3 text-primary" htmlFor="email">
              Email
              <input
                className="form-control border-0 rounded-0 border-bottom border-2 shadow-none px-0 border-primary"
                type="email"
                id="email"
                onChange={emailChange}
              />
            </label>
            <label className="d-block mt-3 text-primary" htmlFor="password">
              Password
              <input
                className="form-control border-0 rounded-0 border-bottom border-2 shadow-none px-0 border-primary"
                type="password"
                id="password"
                onChange={passwordChange}
              />
            </label>
            <label className="d-block mt-3 text-primary" htmlFor="passwordConfirm">
              Konfirmasi Password
              <input
                className="form-control border-0 rounded-0 border-bottom border-2 shadow-none px-0 border-primary"
                type="password"
                id="passwordConfirm"
                onChange={passwordConfirmChange}
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

export default RegisterInput;
