import React from 'react';
import Questions from './questions';

class FAQ extends React.Component {
  componentDidMount() {
    console.log('LandingPage mounted');
  }

  render() {
    return (
      <div className="faq" id="faq">
        <div className="faq-landing">
          <div className="row justify-content-center pt-3">
            <img src={require('../../theme/custom/images/Logo_deconstructed.png')} alt="Logo_deconstructed" height="75" />
          </div>
          <div className="row justify-content-center pt-3">
            <h2>FAQ</h2>
          </div>
          <div className="row justify-content-center pt-3 pb-5">
            <h6>We've answered some of the questions we've heard most often below.</h6>
          </div>
        </div>
        <Questions />
      </div>
    );
  }
}

export default FAQ;
