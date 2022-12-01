import React from 'react';
import RegisterInput from '../components/RegisterInput/RegisterInput';

export default function RegisterPage() {
  return (
    <article className="container">
      <div className="row row-cols-1 row-cols-lg-2">
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <img className="img-fluid p-5" src="./img/health-illness.png" alt="ilustrasi kesehatan mental" />
        </div>
        <div className="col pe-lg-5 d-flex flex-column justify-content-center">
          <h1 className="text-center fs-3">Register</h1>
          <RegisterInput />
          <p className="mt-2">
            Sudah punya akun? login
            <a className="text-decoration-none text-primary" href="#"> disini</a>
          </p>
        </div>
      </div>
    </article>
  );
}