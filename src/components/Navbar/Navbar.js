import React from 'react';
import './Navbar.scss';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Navbar() {
  const [about, setAbout] = React.useState(false);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top my-nav">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="/img/logo-brand.png" alt="logo brand asikmen" height="36" />
          </Link>

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
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/"
                  onClick={function () {
                    setAbout(false);
                  }}
                >
                  Home
                </Link>
              </li>
              {about === false && (
                <li className="nav-item ">
                  <a className="nav-link" aria-current="page" href="#artikel">
                    News
                  </a>
                </li>
              )}
              <li className="nav-item ">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/about"
                  onClick={function () {
                    setAbout(true);
                  }}
                >
                  About Us
                </Link>
              </li>

              <li className="nav-item btn-login d-flex align-items-center text-white ">
                <Link className="nav-link nav-link__login" aria-current="page" to="/login">
                  Login
                  <BsArrowRight strokeWidth={1} className="bi bi-arrow-right" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
