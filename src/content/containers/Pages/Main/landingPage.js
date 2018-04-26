import React from 'react';
import Helmet from 'react-helmet';

class Landingpage extends React.Component {
  componentDidMount() {
    console.log('LandingPage mounted');
  }

  render() {
    // <!-- Start of Meetings Embed Script -->
    // <!-- End of Meetings Embed Script -->
    return (
      <div className="landingPage2">
        <Helmet title="Home" />
        <div className="container pt-5">
          <h2 id="text">Alumni Outcomes Data</h2>
          <h2 id="text">that is easy to collect and use</h2>
          <div className="wow bounceIn" data-wow-duration="1.0s" data-wow-delay="0.25s">
            <div className="row justify-content-center">
              <div className="mt-5 mb-2 py-1" id="box">
                <h3>Beautiful Responsive Surveys</h3>
              </div>
            </div>
          </div>
          <div className="wow bounceIn" data-wow-duration="1.0s" data-wow-delay="0.50s">
            <div className="row justify-content-center">
              <div className="p-1" id="box2">
                <h3>Big Data and Joined Up Reporting</h3>
              </div>
            </div>
          </div>
          <hr style={{ width: '40vw' }} />
        </div>
      </div>
    );
  }
}

export default Landingpage;
