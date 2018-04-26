import React from 'react';

export default () => (
  <div id="heading">
    <div className="container py-5">

      <div className="row justify-content-center">
        <div className="pt-5">
          <h3 id="title">Why AlumniBase?</h3>
        </div>
      </div>

      <div className="row justify-content-center mb-3" id="intro">
        <h5>For us, a lifetime of possibilities means a lifetime of outcomes</h5>
        <h7>AlumniBase delivers financial and non-financial insights over the full career of your graduates.</h7>
      </div>

      <div className="benefits-intro">
        <div className="row justify-content-center">
          <div className="wow fadeInDown" data-wow-duration="1.0s" data-wow-delay="0.25s">
            <i style={{ fontSize: '7em' }} className="fal fa-users" />
          </div>
        </div>
        <div className="row justify-content-center">
          <h2 style={{ position: 'absolute' }}>AB</h2>
          <div className="mb-5">
            <i style={{ fontSize: '7em', position: 'relative' }} className="fal fa-filter" /><br />
          </div>
        </div>
        <div className="row d-flex justify-content-center mb-5">
          <a id="button" className="btn btn-light" href="#TEF" role="button">Teaching Excellence Framework</a>
          <a id="button" className="btn btn-light" href="#widening" role="button">Widening Participation</a>
          <a id="button" className="btn btn-light" href="#student" role="button">Student Recruitment</a>
          <a id="button" className="btn btn-light" href="#careers" role="button">Careers</a>
          <a id="button" className="btn btn-light" href="#alumniRelations" role="button">Alumni Outreach</a>
        </div>
      </div>

    </div>
  </div>

);

