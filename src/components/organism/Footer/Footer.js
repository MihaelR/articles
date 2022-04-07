import React from 'react';
import "./Footer.css";


function Footer() {

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-container-left">
            2021 LOGO XYZ AG
        </div>
        <div className="footer-container-right">
            <a className="impressum" href="https://www.google.com/">
              Impresum
            </a>
            <a className="disclaimer" href="https://www.google.com/">
              Disclaimer
            </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
