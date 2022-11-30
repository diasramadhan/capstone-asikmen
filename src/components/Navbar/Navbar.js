import React from 'react';
import './Navbar.scss';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top my-nav">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="/img/logo-brand.png" alt="logo brand asikmen" height="36" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" aria-current="page" href="#product">
                About Us
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" aria-current="page" href="#footer">
                Artikel
              </a>
            </li>
            <li className="nav-item btn-login d-flex align-items-center text-white ">
              <a className="nav-link nav-link__login" aria-current="page" href="#login">
                Login
                <i className="bi bi-arrow-right" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
