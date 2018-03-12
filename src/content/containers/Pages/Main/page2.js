import React from 'react';
import LandingPage from '../../../components/Main/landingPage2';
import Navbar from '../../../components/Main/navbar2';
import WhatWeDo from '../../../components/Main/whatWeDo2';
import HowItWorks from '../../../components/Main/howItWorks2';
import BouncePoint from '../../../components/Main/bouncePoint2';
import Questions from '../../../components/Main/questions2';
import VirtuousCircle from '../../../components/Main/virtuousCircle';
import Survey from '../../../components/Main/survey';
import Footer from '../../../components/Main/footer';

class page1 extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <LandingPage />
        <WhatWeDo />
        <VirtuousCircle />
        <HowItWorks />
        <Survey />
        <BouncePoint />
        <Questions />
        <Footer />
      </div>
    );
  }
}

export default page1;
