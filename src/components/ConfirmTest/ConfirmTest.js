import React from 'react';
import { Link } from 'react-router-dom';
import './ConfirmTest.scss';

export default function ConfirmTest({ handleBackToTest }) {
  return (
    <section className="confirm-section">
      <h3>Anda yakin ingin menyelesaikan tes ini ?</h3>
      <Link className="btn btn-outline-primary fs-5 m-3" to="/result">Ya</Link>
      <button type="button" className="btn btn-outline-primary fs-5 m-3" onClick={handleBackToTest}>Tidak</button>
    </section>
  );
}
