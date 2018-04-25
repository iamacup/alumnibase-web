import React from 'react';

import Navbar from '../../../../content/components/NewNavbar';
import Footer from '../../../../content/components/Footer';

class Legal extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="#0050bd" />
        <div className="text-center dark-blue-header-text pt-5">
          <p style={{ fontSize: '26px', lineHeight: '33px' }}>Compliance and Legal</p>
        </div>
        <div className="legal-header pb-5" style={{ transform: 'translateX(opx)', marginBottom: '100px' }}>

          <div className="container">
            <div className="row justify-content-center py-5">


              <div className="col-lg-6">
                <div className="m-5">
                  <div className="dark-blue-header-text">
                    <p style={{
 fontSize: '24px', lineHeight: '36px', fontWeight: '400', color: '#fff',
}}
                    >Data Protection
                    </p>
                  </div>
                  <div className="cycle-text">
                    <h5 className="dark-blue-header-text" style={{ color: '#b5deff' }}>GDPR Compliant</h5>
                    <p className="dark-blue-header-text" style={{ color: '#b5deff' }}>AlumniBase is designed to be fully GDPR compliant - providing outcomes data without increasing a university's GDPR responsibilities.</p>
                    <p className="dark-blue-header-text" style={{ color: '#b5deff' }}>From communication with alumni to returning useable insights, please get in touch to find out more about how we deliver the GDPR logistics in addition to the data.</p>
                    <a href="/GDPR" style={{ color: '#fff' }}>Click here for our detailed views on the GDPR & AlumniBase</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="principles m-0 m-sm-5">
                  <li>
                    <div className="card-body">
                      <div className="cycle-text">
                        <p className="text-left dark-blue-main-text" style={{ color: '#b5deff' }}>The T's & C's details what you can, and cannot do with the data within our platform, among other things.</p>
                        <p className="text-left dark-blue-main-text text-muted" style={{ color: '#b5deff' }}>Coming Soon</p>
                      </div>
                    </div>
                  </li>

                  <li className="mt-5">
                    <div className="card-body">
                      <div className="cycle-text">
                        <p className="text-left dark-blue-main-text" style={{ color: '#b5deff' }}>Our privacy policy explains what data we collect, who we share it with and your rights and controls.</p>
                        <p className="text-left dark-blue-main-text text-muted" style={{ color: '#b5deff' }}>Coming Soon</p>
                      </div>
                    </div>
                  </li>
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

export default Legal;
