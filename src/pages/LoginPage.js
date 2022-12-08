import React from 'react';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput/LoginInput';
import Navbar from '../components/Navbar/Navbar';

export default function LoginPage() {
  return (
    <>
      <Navbar />

      <article className="container">
        <div className="row row-cols-1 row-cols-lg-2">
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <img className="img-fluid p-4 p-xl-5" src="./img/login-illustration.svg" width="500" alt="ilustrasi kesehatan mental" />
          </div>
          <div className="col pe-lg-5 d-flex flex-column justify-content-center">
            <h1 className="text-center fs-3 fw-bold">Login</h1>
            <LoginInput />
            <p className="mt-2">
              Belum punya akun? daftar
              {' '}
              <Link to="/register" className="text-decoration-none">disini</Link>
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
