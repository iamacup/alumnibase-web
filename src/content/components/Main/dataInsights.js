import React from 'react';
import Navbar from './navbar2';
import SurveyDataInsights from './surveyDataInsights';
import Footer from './footer';

class DataInsights extends React.Component {
  render() {
    return (
      <div id="dataInsights">
        <Navbar />
        <div className="container">
          <div className="row justify-content-center">
            <h4 id="title">Data Insights</h4>
          </div>
          <div className="row justify-content-center mb-5">
            <h6>We're passionate about high quality higher education data!</h6>
          </div>
          <div className="row text-center py-5 mb-5" id="socialMobility">
            <div className="col m-5">
              <h5>Social Mobility</h5>
              <h5>Generating a full view of students enables understanding the full cycle of a student studying at a HE institution, from application to life long employment outcomes.</h5>
            </div>
          </div>
        </div>
        <SurveyDataInsights />
        <Footer />
      </div>
    );
  }
}

export default DataInsights;
