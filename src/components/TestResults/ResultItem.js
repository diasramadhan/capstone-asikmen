import React from 'react';
import { Link } from 'react-router-dom';
import './ResultItem.scss';

function ResultItem({ dataHistory, dataResult, resultCode, img }) {
  return (
    <section className="result-section">
      <div className="result-description">
        <img src={img} alt="depression status" />
        <h3 className="fw-bold text-primary">{dataHistory}</h3>
        <p>{dataResult[resultCode].description}</p>
      </div>
      <Link className="btn btn-outline-primary fs-6 m-3" to="/dashboard">Kembali ke Dashboard</Link>
    </section>
  );
}
export default ResultItem;
