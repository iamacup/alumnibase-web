
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

class Page extends React.PureComponent {
  render() {
    return (
      <div>
        <Navbar />
        <div style={{ marginTop: '100px' }} />
        <div className="meetings-iframe-container" data-src="https://app.hubspot.com/meetings/patrick147?embed=true" />
      </div>
    );
  }
}

export default Page;
