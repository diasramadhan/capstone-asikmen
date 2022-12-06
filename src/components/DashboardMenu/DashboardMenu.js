import React from 'react';
import './DashboardMenu.scss';
import { RiMentalHealthLine, RiHistoryLine } from 'react-icons/ri';
import { BsCheck2Square } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function DashboardMenu() {
  return (
    <div className="row row-cols-1 row-cols-xl-3 g-3">
      <div className="col">
        <Link to="/test" className="text-decoration-none">
          <div className="dashboard__bg-1 text-white p-3 rounded-3 h-100">
            <RiMentalHealthLine className="display-1 opacity-50" />
            <h2 className="mb-2">Tes Kesehatan Mental</h2>
            <p>Membantumu dalam mengetahui keadaan kesehatan mentalmu</p>
          </div>
        </Link>
      </div>
      <div className="col">
        <Link to="/todo" className="text-decoration-none">
          <div className="dashboard__bg-2 text-white p-3 rounded-3 h-100">
            <BsCheck2Square className="display-1 opacity-50" />
            <h2 className="mb-2">Asikmen Todo</h2>
            <p>Membimbingmu dalam mengurangi masalah kesehatan mentalmu</p>
          </div>
        </Link>
      </div>
      <div className="col">
        <Link to="/history" className="text-decoration-none">
          <div className="dashboard__bg-3 text-white p-3 rounded-3 h-100">
            <RiHistoryLine className="display-1 opacity-50" />
            <h2 className="mb-2">Cek Riwayat Tes</h2>
            <p>Melihat hasil tes yang telah selesai kamu lakukan</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
