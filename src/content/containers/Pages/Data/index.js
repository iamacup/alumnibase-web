
import React from 'react';

import Navbar from '../../../../content/components/NewNavbar';
import Footer from '../../../../content/components/Footer';

class Data extends React.Component {
  render() {
    return (
      <div>
        <Navbar
          altImage
          containerClass="alt-nav"
        />

        <div className="container">

          <div style={{ marginTop: '100px' }}>
            <div className="text-center dark-blue-header-text">
              <p style={{ fontSize: '26px', lineHeight: '33px' }}>Insights and Data</p>
              <div style={{ marginTop: '26px' }} />

              <div className="row">
                <div className="col-sm-2" />
                <div className="col-sm-8">
                  <p style={{ fontSize: '24px', lineHeight: '36px', fontWeight: '400' }}>
                  Explore a rich world of data driven, GDPR compliant analytics
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="row justify-content-md-center">
            <div className="col-sm-6">
              <div className="green-box-border text-center" style={{ marginTop: '60px', marginBottom: '100px' }}>
                <div className="p-2 cycle-text">
                  <h5 className="dark-blue-header-text" style={{ marginTop: '1rem' }}>Full Featured Demo</h5>
                  <p className="dark-blue-main-text">Coming Soon...</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        <Footer />
      </div>
    );
  }
}

export default Data;
