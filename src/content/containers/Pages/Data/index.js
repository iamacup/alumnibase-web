
import React from 'react';
import Helmet from 'react-helmet';

import Navbar from '../../../../content/components/Navbar';
import Footer from '../../../../content/components/Footer';

export default () => (
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
