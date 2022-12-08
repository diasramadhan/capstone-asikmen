import React from 'react';
import './NotFound.scss';
import BackButton from '../BackButton/BackButton';

function NotFound() {
  return (
    <div className="not-found__wrapper">
      <img src="/img/not-found.svg" className="not-found__img" alt="Not found page" />
      <h3 className="not-found__text">Halaman Tidak Ditemukan</h3>
      <p>Maaf, kami tidak dapat menemukan halaman yang anda cari</p>
      <BackButton />
    </div>
  );
}

export default NotFound;
