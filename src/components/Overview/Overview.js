import React from 'react';
import './Overview.scss';

function Overview() {
  return (
    <section className="overview">
      <div className="container my-bg">
        <div className="row d-flex justify-content-center align-items-center overview mt-lg-5">
          <div className="col-lg-6 my-3 d-flex flex-column justify-content-center align-items-center justify-content-md-start align-items-md-start text-center text-md-start">
            <div className="mental-health d-flex justify-content-between align-items-center">
              Mental Health <img src="./img/heart.svg" alt="heart" />
            </div>
            <h1 className="title">
              <span className="biru">Sebuah cara mudah</span>
              <br /> mengatasi masalah <br /> kesehatan mentalmu
            </h1>
            <p className="description">
              Kesehatan mental merupakan hal penting bagi setiap orang, kesehatan mental yang buruk
              dapat mengganggu kehidupanmu, itu sangat tidak keren. Aplikasi ini adalah sahabat kamu
              sekarang, brodie~
            </p>
            <a href="#" className="my-btn mt-3">
              Daftar Sekarang
            </a>
          </div>

          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <img src="./img/vector-kesehatan.png" alt="" className="vector-kesehatan" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
