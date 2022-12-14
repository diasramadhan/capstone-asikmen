import React from 'react';
import { Link } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput/RegisterInput';
import Navbar from '../components/Navbar/Navbar';

export default function RegisterPage() {
  return (
    <>
      <Navbar hideNews />
      <article className="container">
        <div className="row row-cols-1 row-cols-lg-2">
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <img className="img-fluid p-4 p-xl-5" src="./img/register-illustration.svg" width="500" alt="ilustrasi kesehatan mental" />
          </div>
          <div className="col pe-lg-5 d-flex flex-column justify-content-center">
            <h1 className="text-center fs-3 fw-bold">Register</h1>
            <RegisterInput />
            <p className="mt-2">
              Sudah punya akun? login
              {' '}
              <Link to="/login" className="text-decoration-none">disini</Link>
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
