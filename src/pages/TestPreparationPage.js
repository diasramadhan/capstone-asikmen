import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import FooterSecondary from '../components/Footer/FooterSecondary';

function TestPreparation() {
  return (
    <>
      <section className="test-preparation p-3">
        <Link className="btn btn-outline-primary fs-6" to="/dashboard">
          <FiArrowLeft /> Back
        </Link>
        <div className="text-preparation-wrapper container mt-5">
          <h1 className="test-preparation__title fw-bold text-center text-primary">Desclaimer</h1>
          <p className="text-left">Catatan penting sebelum Anda memulai:</p>
          <ul className="list-group-numbered">
            <li className="list-group-item d-flex align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-sm">Test ini tidak ditujukan untuk mendiagnosis gangguan psikologis, namun untuk membantu mengenali gambaran dirimu saat ini</div>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-sm">Apabila Anda merasa memiliki masalah dan memerlukan penanganan lebih lanjut, silakan menghubungi bantuan profesional di dekat Anda.</div>
              </div>
            </li>
          </ul>
          <p className="text-left">Dengan mengetahui gambaran kondisi kesehatan mental pribadi, kamu bisa mempersiapkan langkah selanjutnya.Yuk isi dengan jujur ya.</p>

          <div className="col text-center">
            <Link to="/test/start" className="btn btn-outline-primary fs-5 m-3">Mulai Tes</Link>
          </div>
        </div>
      </section>

      <FooterSecondary />
    </>
  );
}

export default TestPreparation;
