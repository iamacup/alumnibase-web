import React from 'react';
import Table from './table';

class Roadmap extends React.Component {
  render() {
    return (
      <div className="roadmap" id="roadmap">
        <div className="roadmap-landing">
          <div className="row justify-content-center pt-3">
            <img src={require('../../../../content/theme/custom/images/Logo_deconstructed.png')} alt="Logo_deconstructed" height="75" />
          </div>
          <div className="row justify-content-center pt-3">
            <h2>Product Roadmap</h2>
          </div>
          <div className="row justify-content-center pt-3 pb-5">
            <h6>What we're building and when</h6>
          </div>
        </div>
        <div clasName="container">
          <div className="text-box">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <p>Below, find a detailed list of the features we’re building to help you be compliant. But first, a quick primer on the legalese associated with the GDPR and a typical AlumniBase to University customer relationship.</p>
                <p>Let’s say that Ana is a contact of yours and an EU citizen. She's called the "data subject," and your university (let's call you Aristotle University.) is called the "controller" of that data. </p>
                <p>If you're an AlumniBase customer, then you sent an email to Ana with a link to the AlumniBase survey. When Ana filled it in she formed a new relationship with us as a second data “controller”, where Ana is again the “data subject.” </p>
                <p>With the introduction of the GDPR, data subjects like Ana are given an enhanced set of rights, and controllers like Aristotle University and AlumniBase, respectively, an enhanced set of regulations.</p>
                <p>Importantly, if we anonymise and aggregate Ana’s records and return these to you, these are no longer personally identifying and you won’t need to treat them the same way as Ana’s individual record you already have.
</p>
              </div>
            </div>
          </div>
          <Table />
        </div>
      </div>
    );
  }
}

export default Roadmap;

