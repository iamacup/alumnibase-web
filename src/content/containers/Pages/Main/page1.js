import React from 'react';
import LandingPage from '../../../components/Main2/landingPage';
import Navbar from '../../../components/Main2/navbar';
import WhatWeDo from '../../../components/Main2/whatWeDo';
import HowItWorks from '../../../components/Main2/howItWorks';
import Questions from '../../../components/Main2/questions';
// import DoItNow from '../../../components/Main2/doItNow';
import Footer from '../../../components/Main/footer';
import BouncePoint from '../../../components/Main2/bouncePoint';
import CallToAction from '../../../components/Main2/callToAction';

class page1 extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <body data-spy="scroll" data-target="#navbar-example">
          <LandingPage />
          <WhatWeDo />
          <HowItWorks />
          <Questions />
          <CallToAction />
          <BouncePoint />
          <Footer />
          <h5 hidden id="contact">contact</h5>
        </body>
      </div>
    );
  }
}

export default page1;
