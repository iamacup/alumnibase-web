import React from 'react';

import Navbar from '../../../../content/components/NewNavbar';
import Footer from '../../../../content/components/Footer';

class Overview extends React.Component {
    componentDidMount() {
    console.log('Overview page mounted');
  }
  render() {
    return (
      <div>
        <Navbar 
          altImage
          containerClass="alt-nav"
        />
        <div className="overview-header">
        <div className="overview-background">
            <div className="stripe s0" />
            <div className="stripe s1" />
            <div className="stripe s2" />
            <div className="stripe s3" />
            <div className="stripe s4" />
            <div className="stripe s5" />
        </div>
        </div>
        <div className="overview-page">
        <div className="container">
        <div className="text-center pb-4">
              <h1 style={{ color: "#1d1d5c" }}>Overview of Alumni Base</h1>
            </div>
              <div className="row justify-content-center pt-3 pb-5 mb-5">
                <div className="col-md-5 pb-4 align-self-center">
                <div className="text-center cycle-text">
                <img className="logo-large pb-2" alt="sliips-logo" src={require('../../../../content/theme/custom/images/SLIIPS-LOGOFinal-TransBG-PNG.png')} width="300px" />
                  <h5 className="dark-blue-header-text">Career Data Start Up</h5>
                </div>
                </div>
                <div className="col-md-6">
                <div className="text-one text-center cycle-text">
                  <h5 className="dark-blue-header-text">We began as <a className="text-info" href="www.sliips.com">www.sliips.com</a>.<br /> A career data start up helping graduates with their career.</h5>
                  <hr />
                  <div className="row p-3">
                  <div className="col-lg-6">
                  <p className="dark-blue-main-text">We had over 3,000 people in professional services companies in London sign up over six months.</p>
                </div>
                  <div className="col-lg-6">
                  <p className="dark-blue-main-text">We have grads useable insights for their careers, leading many to negotiate fair pay with their employer.</p>
                </div>
                </div>
                </div>
                </div>
              </div>
            <div>
              <div className="row justify-content-center">
                  <div className="text-center dark-blue-header-text pt-md-2 pb-5">
              <p style={{ fontSize: '26px', lineHeight: '33px' }}>We realised people needed these insights earlier,<br />and believe university is the best time.</p>
            </div>
              </div>

              <div className="row justify-content-center">
              <div className="text-center dark-blue-header-text pt-5 pb-5">
              <p style={{ fontSize: '26px', lineHeight: '33px' }}>How it works:</p>
            </div>
            </div>
              <div className="row text-center pb-5 mb-5">
              <div className="col-md-4">
              <i className="fas fa-pencil-alt fa-3x purple-text-two" style={{ marginBottom: '16px' }} />
              <p className="dark-blue-main-text">1. Survey Alumni.</p>
              <p className="dark-blue-main-text">Universities email alumni with a link to the AlumniBase Survey.</p>
              </div>
              <div className="col-md-4">
              <div className="row text-center pb-5 mb-5" id="circle">
              <img className="logo-large pb-2" alt="career" height="100px" src={require('../../../../content/theme/custom/images/front-new/circle-new.png')} />
              </div>
              <i className="fas fa-database fa-3x purple-text-two" style={{ marginBottom: '16px' }} />
              <p className="dark-blue-main-text">2. Analyse the Data.</p>
              <p className="dark-blue-main-text">AlumniBase returns anonymised, aggregated information that is not personally identifiable, and outside GDPR scope.</p>
              </div>
              <div className="col-md-4">
              <i className="fas fa-chart-line fa-3x purple-text-two" style={{ marginBottom: '16px' }} />
              <p className="dark-blue-main-text">3. Use in TEF, Careers Advice and Recruitment.</p>
              <p className="dark-blue-main-text">Alumni complete the survey and in return get access to information relevant for their career.</p>
              </div>
              </div>
            </div>
            <div>
                   <div className="row justify-content-center">
                  <div className="text-center dark-blue-header-text pt-md-5 mt-5 pb-3 pb-lg-5">
              <p style={{ fontSize: '26px', lineHeight: '33px' }}>Benefits</p>
            </div>
              </div>
               <div className="row text-center pb-5 mb-5">
              <div className="col-md-4">
                <img className="logo-large pb-2" alt="career" height="100px" src={require('../../../../content/theme/custom/images/front-new/3-s2.png')} />
              <p className="dark-blue-main-text">Students find the right Career.</p>
              </div>
              <div className="col-md-4">
                <img className="logo-large pb-2" alt="outcomes" height="100px" src={require('../../../../content/theme/custom/images/front-new/1-s2.png')} />
              <p className="dark-blue-main-text">Universities improve graduate outcomes.</p>
              </div>
              <div className="col-md-4">
                <img className="logo-large pb-2" alt="earnings" height="100px" src={require('../../../../content/theme/custom/images/front-new/9-s.png')} />
              <p className="dark-blue-main-text">Graduates can maximise earnings.</p>
              </div>
              </div>
            </div>
        </div>
        </div>
        <Footer />
      </div>
      )
  }
}

export default Overview;