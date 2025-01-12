import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col" id="contact">
            <h4>CONTACT INFO</h4>
            <h1 className="list-unstyled">
              <li>342-420-6969</li>
              <li>IIITKalyani, Nadia</li>
              <li>Budha-Park</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Stuff</h4>
            <ui className="list-unstyled">
              <li>SAYAN MANDAL</li>
              <li>AMAN GUPTA</li>
              <li>ARIN TAMANG</li>
              <li>AUDRIJA</li>
              <li>HARSH SINGH</li>
              <li>AYUSH PRASAD</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>WELL ANOTHER COLUMN</h4>
            <ui className="list-unstyled">
              <li>INFO1</li>
              <li>INFO2</li>
              <li>INFO3</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;