import React from 'react';
import { Link } from 'react-router-dom';
import useGetValue from '../hooks/useGetValue';
import Loading from '../components/Loading/Loading';

function Result({ userId, historyTestId }) {
  const history = useGetValue(`/history/${userId}/${historyTestId}`);
  const result = useGetValue('results');

  const loading = history.isLoading || result.isLoading;
  if (loading) {
    return (<Loading />);
  }

  const dataHistory = Object.values(history.snapshot);
  const dataResult = Object.values(result.snapshot);
  let hasil = null;
  if (dataHistory[1] < 14) {
    hasil = 0;
  } else if (dataHistory[1] < 40) {
    hasil = 1;
  } else {
    hasil = 2;
  }
  return (
    <section className="result-section">
      <div className="result-description">
        <h1 className="fw-bold text-primary">{dataHistory[2]}</h1>
        <p>{dataResult[hasil].description}</p>
      </div>
      <Link className="btn btn-outline-primary fs-6 m-3" to="/dashboard">Kembali ke Dashboard</Link>
    </section>
  );
}
export default Result;
