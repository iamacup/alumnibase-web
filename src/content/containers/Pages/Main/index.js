
import React from 'react';

import Navbar from '../../../../content/components/Navbar';
import Footer from '../../../../content/components/Footer';

import LandingPage from './landingPage';
import WhatWeDo from './whatWeDo';
import HowItWorks from './howItWorks';
import BouncePoint from './bouncePoint';
import Questions from './questions';
import VirtuousCircle from './virtuousCircle';
import Survey from './survey';

export default () => (
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
