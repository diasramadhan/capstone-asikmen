import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import AuthContext from '../../contexts/AuthContext';
import './BackButton.scss';

function BackButton() {
  const currentUser = React.useContext(AuthContext);
  return (
    <div>
      {currentUser == null ? (
        <Link className="btn btn-outline-primary fs-6" to="/">
          <FiArrowLeft /> Back
        </Link>
      ) : (
        <Link className="back-btn btn btn-outline-primary fs-6" to="/*">
          <FiArrowLeft /> Back
        </Link>
      )}
    </div>
  );
}
export default BackButton;
