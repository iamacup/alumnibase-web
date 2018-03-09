import React from 'react';

class Landingpage extends React.Component {
  componentDidMount() {
    console.log('LandingPage mounted');
  }

  render() {
    return (
      <div className="landingPage2">
        <div className="container pt-5">
          <h2 id="text">Alumni Outcomes Data</h2>
          <h2 id="text">that is easy to collect and use</h2>
          <div className="row justify-content-center">
            <div className="mt-5 mb-2 py-1" id="box">
              <h3>Beautiful Responsive Surveys</h3>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="p-1" id="box2">
              <h3>Big Data and Joined Up Reporting</h3>
            </div>
            <hr style={{ width: '40vw' }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Landingpage;
