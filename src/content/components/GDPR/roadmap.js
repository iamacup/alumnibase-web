import React from 'react';
import Table from './table';

class Roadmap extends React.Component {
  componentDidMount() {
    console.log('LandingPage mounted');
  }

  render() {
    return (
      <div className="roadmap" id="roadmap">
        <div className="roadmap-landing">
          <div className="row justify-content-center pt-3">
            <img src={require('../../theme/custom/images/Logo_deconstructed.png')} alt="Logo_deconstructed" height="75" />
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
                <p>Below, find a detailed list of the features we’re building to help you be compliant. But first, a quick primer on the legalese associated with the GDPR.</p>
                <p>Let’s say that Ana is a contact of yours and an EU citizen. She's called the "data subject," and your company (let's call you Acme University.) is called the "controller" of that data. If you're an AlumniBase customer, then AlumniBase acts as the "processor" of Ana's data on behalf of Acme. With the introduction of the GDPR, data subjects like Ana are given an enhanced set of rights, and controllers and processors like Acme University and AlumniBase, respectively, an enhanced set of regulations.</p>
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

