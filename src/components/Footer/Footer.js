import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="row-footer">
          <div className="footer-col">
            <img src="./img/logo-footer.png" alt="logo asikmen" className="footer-asikmen" />
            <p>Sebuah aplikasi yang akan mendiagnosis dan membantu kesehatan mental kamu.</p>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              <li>
                <a href="#">features</a>
              </li>
              <li>
                <a href="#">pricing</a>
              </li>
              <li>
                <a href="#">reviews</a>
              </li>
              <li>
                <a href="#">updates</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Artikel</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">blog</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">Getting started</a>
              </li>
              <li>
                <a href="#">Help center</a>
              </li>
              <li>
                <a href="#">Server status</a>
              </li>
              <li>
                <a href="#">Report a bug</a>
              </li>
              <li>
                <a href="#">Chat support</a>
              </li>
            </ul>
          </div>
        </div>

        <hr />
        <div className="copy-right">
          <p>Copyright © 2022</p>
          <div className="right">
            <a href="">All Rights Reserved</a> | <a href="">Terms and Conditions</a> |
            <a href="">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
