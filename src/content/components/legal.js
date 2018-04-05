import React from 'react';
import Helmet from 'react-helmet';

import Navbar from './Main/navbar2';
import Footer from './Main/footer';

class Legal extends React.Component {
  render() {
    return (
      <div>
        <div id="legalPage">
          <Navbar />
          <Helmet title="Compliance & Legal" />
          <div className="container" id="wrapper">

            <div className="row justify-content-center mb-5">
              <div className="card" style={{ width: '53rem' }}>
                <div className="card-body">
                  <h5 className="card-title">Data Protection</h5>
                  <h6 className="card-subtitle mb-2 text-muted">GDPR Compliant</h6>
                  <p className="card-text">AlumniBase is designed to be fully GDPR compliant - providing outcomes data without increasing a university's GDPR responsibilities.</p>
                  <p className="card-text">From communication with alumni to returning useable insights, please get in touch to find out more about how we deliver the GDPR logistics in addition to the data.
                  </p>
                  <a href="/gdpr">Click here for our full vision on the GDPR & AlumniBase</a>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="card" id="linkCard">
                <div className="card-header">
             Links
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <div className="card-body">
                      <p className="card-text">The T's & C's details what you can, and cannot do with the data within our platform, among other things.</p>
                      <h7 className="card-title text-muted">Coming Soon</h7>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="card-body">
                      <p className="card-text">Our privacy policy explains what data we collect, who we share it with and your rights and controls.</p>
                      <h7 className="card-title text-muted">Coming Soon</h7>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Legal;
