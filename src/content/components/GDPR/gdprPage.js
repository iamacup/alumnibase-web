import React from 'react';
import Helmet from 'react-helmet';
import Navbar from '../Main/navbar2';
import SecondNavbar from './gdprNavbar';
import Content from './content';
import Roadmap from './roadmap';
import Opportunity from './opportunity';
import FAQ from './faq';
import Footer from '../Main/footer';

class GdprPage extends React.Component {
  componentDidMount() {
    console.log('LandingPage mounted');
  }

  render() {
    return (
      <div className="GDPR">
        <Helmet title="GDPR" />
        <Navbar />
        <div className="landing">
          <div className="row justify-content-center pt-5 mt-5">
            <h2>The GDPR & AlumniBase</h2>
          </div>
          <div className="row justify-content-center pt-3 pb-5 mb-5">
            <h6>Here's what we're doing to help you comply.</h6>
          </div>
          <SecondNavbar />
        </div>
        <Content />
        <Roadmap />
        <Opportunity />
        <FAQ />
        <Footer />
      </div>
    );
  }
}

export default GdprPage;
