import React from 'react';
import './HistoryList.scss';

function HistoryList({ dataHistory }) {
  return (
    <div className="history-list__wrapper">
      { dataHistory == null ? (
        <div className="history-list__blank">
          <img src="/img/no-history.svg" className="icon-no-history" alt="icon no history" />
          <p className="fs-2 fw-bold">Oops!</p>
          <p className="fs-5 ">Riwayat tes anda masih kosong</p>
        </div>
      ) : (
        <>
          <div className="history-list__title">
            <p className="fw-bold fs-4">Hasil Tes</p>
            <p className="fw-bold py-1">Tanggal</p>
          </div>
          <div className="history-list">
            {dataHistory.map((historyItem) => (
              <div className="history-item" key={historyItem.date}>
                <div className="history-item__color-status" />
                <p className="fs-5 fw-bold">{historyItem.status}</p>
                <div className="history-item__date">
                  <p className="fs-6">{historyItem.date}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default HistoryList;
