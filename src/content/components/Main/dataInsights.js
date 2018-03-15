import React from 'react';
import Helmet from 'react-helmet';
import Navbar from './navbar2';
import SurveyDataInsights from './surveyDataInsights';
import Footer from './footer';

class DataInsights extends React.Component {
  render() {
    return (
      <div id="dataInsights">
        <Navbar />
        <Helmet title="Data Insights" />
        <div className="container text-center p-5 my-5" id="heading">
          <h1 id="text">Interactive Demo</h1>
          <h1 id="text">coming soon</h1>
          <div className="m-5">
            <i id="text" className="fal fa-pencil" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default DataInsights;
