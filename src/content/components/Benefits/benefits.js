import React from 'react';
import Helmet from 'react-helmet';
import Navbar from '../Main/navbar2';
import Footer from '../Main/footer';
import TEF from './TEF';
import Introduction from './introduction';
import WideningParticipation from './wideningParticipation';
import StudentRecruitment from './studentRecruitment';
import Careers from './careers';
import AlumniOutreach from './alumniOutreach';

class Benefits extends React.Component {
  componentDidMount() {
    console.log('Benefits page mounted');
  }


  render() {
    return (
      <div id="benefitPage">
        <Navbar />
        <Helmet title="Benefits" />
        <Introduction />
        <TEF />
        <WideningParticipation />
        <StudentRecruitment />
        <Careers />
        <AlumniOutreach />
        <Footer />
      </div>
    );
  }
}

export default Benefits;
