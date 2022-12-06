import React from 'react';
import { Link } from 'react-router-dom';

function Result() {
  return (
    <section className="result-section">
      <div className="result-description">
        <h1 className="fw-bold text-primary">Depresi Sedang</h1>
        <p>Mungkin kamu membutuhkan sedikit bantuan untuk melewati situasi ini.</p>
        <p>Jangan ragu untuk bercerita mengenai hal tersebut pada orang yang kamu percaya ya</p>
      </div>
      <Link className="btn btn-outline-primary fs-6 m-3" to="/dashboard">Kembali ke Dashboard</Link>
    </section>
  );
}
export default Result;
