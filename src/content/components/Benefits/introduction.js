import React from 'react';

class Introduction extends React.Component {
  render() {
    return (
      <div id="heading">
        <div className="container py-5">

          <div className="row justify-content-center">
            <div className="pt-5">
              <h3 id="title">Why AlumniBase?</h3>
            </div>
          </div>

          <div className="row justify-content-center mb-3" id="intro">
            <h6>For us, a lifetime of possibilities means a lifetime of outcomes</h6>
            <h7>AlumniBase is designed to give insights across the full career of alumni on both financial and non-financial metrics.</h7>
          </div>

          <div className="benefits-intro">
            <div className="row justify-content-center">
              <i style={{ fontSize: '7em' }} className="fal fa-users" />
            </div>
            <div className="row justify-content-center">
              <h2 style={{ position: 'absolute' }}>AB</h2>
              <div className="mb-5">
                <i style={{ fontSize: '7em', position: 'relative' }} className="fal fa-filter" /><br />
              </div>
            </div>
            <div className="row d-flex justify-content-center mb-5">
              <div className="col-xl d-flex justify-content-center mb-1">
                <a id="button" className="btn btn-light" href="#TEF" role="button">Teaching Excellence Framework</a>
              </div>
              <div className="col-xl d-flex justify-content-center mb-1">
                <a id="button" className="btn btn-light" href="#widening" role="button">Widening Participation</a>
              </div>
              <div className="col-xl d-flex justify-content-center mb-1">
                <a id="button" className="btn btn-light" href="#student" role="button">Student Recruitment</a>
              </div>
              <div className="col-xl d-flex justify-content-center mb-1">
                <a id="button" className="btn btn-light" href="#careers" role="button">Careers</a>
              </div>
              <div className="col-xl d-flex justify-content-center mb-1">
                <a id="button" className="btn btn-light" href="#alumniRelations" role="button">Alumni Outreach</a>
              </div>
            </div>
          </div>


          <h6 id="intro">Understanding these has a wide range of benefits that have multiple uses across a university.</h6>
        </div>
      </div>

    );
  }
}

export default Introduction;
