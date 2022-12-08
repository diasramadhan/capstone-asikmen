import { signOut } from 'firebase/auth';
import React from 'react';
import { MdLogout } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import { auth } from '../../utils/firebaseConfig';
import './NavbarAuth.scss';

export default function NavbarAuth() {
  const currentUser = React.useContext(AuthContext);
  console.log(currentUser);
  const navigate = useNavigate();

  const signOutHandler = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <nav className="navbar bg-white py-4 sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="/img/logo-brand.png" alt="logo brand asikmen" height="36" />
        </a>
        <div className="d-none d-lg-flex">
          <div className="bg-primary navbar-auth__user d-flex align-items-center me-3">
            <img src={currentUser.photoURL} alt="profil" height="40" className="rounded-circle" />
            <div className="px-3 text-white">
              {currentUser.displayName}
            </div>
          </div>
          <button type="button" className="btn navbar-auth__logout text-white" onClick={signOutHandler}>
            Log Out
            {' '}
            <MdLogout className="fs-5" />
          </button>
        </div>
        <button type="button" className="btn navbar-auth__logout p-0 rounded-pill text-white d-block d-lg-none" onClick={signOutHandler}>
          <img src={currentUser.photoURL} alt="profil" height="40" className="rounded-circle" />
          <MdLogout className="fs-3 mx-2" />
        </button>
      </div>
    </nav>
  );
}
