import React from 'react';
import Navbar from './navbar2';
import Footer from './footer';

class Legal extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container" id="legalPage">
          <div id="wrapper">

            <div className="row justify-content-center">
              <div className="col-12">
                <div className="card" style={{ width: '53rem' }}>
                  <div className="card-body">
                    <h5 className="card-title">GDPR</h5>
                    <h6 className="card-subtitle mb-2 text-muted">GDPR Compliant</h6>
                    <p className="card-text">Alumni Base is fully GDPR Compliant and can be implemented without increasing a Universities' GDPR responsabilities at all.</p>
                    <ul>
                      <li>Our tool is completely GDPR compliant and protecting alumni data is our primary data objective</li>
                      <li>Alumni Base holds the Personal Information and passes you the aggregate, which isn't considered Personal Information.</li>
                      <li>Optimising the survey by sharing some alumni information with us is possible under GDPR</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div><br /><br />

            <div className="card" id="linkCard">
              <div className="card-header">
             Links
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="card-body">
                    <p className="card-text">The T's & C's details what you can, and cannot do with the data within our platform, among other things.</p>
                    <h7 className="card-title"><a href="/terms">Terms & Conditions</a></h7>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="card-body">
                    <p className="card-text">Our privacy policy explains what data we collect, who we share it with and your rights and controls.</p>
                    <h7 className="card-title"><a href="/privacy">Privacy</a></h7>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="card-body">
                    <p className="card-text">...</p>
                    <h7 className="card-title"><a href="/copyright">Copyright</a></h7>
                  </div>
                </li>

              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Legal;
