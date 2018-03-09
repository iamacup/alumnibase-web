import React from 'react';
import Navbar from './navbar2';
import Footer from './footer';

class Benefits extends React.Component {
  componentDidMount() {
    console.log('Benefits page mounted');
  }

  render() {
    return (
      <div>
        <Navbar />
        <div id="benefitPage">
          <h3 id="title">Why AlumniBase?</h3>
          <p>For us, a lifetime of possibilities means a lifetime of outcomes – and AlumniBase is designed to give insights across the full career of alumni on both financial and non-financial metrics.
Understanding these has a wide range of benefits that have multiple uses across a university.
          </p>
          <img alt="funnel" src={require('../theme/custom/images/benefitsFunnel.png')} style={{ height: '600px' }} />
          <div id="mainContainer">
            <div id="TEF">
              <h3 id="subHeading">Teaching Excellence Framework</h3>
              <img id="image" alt="logo" src={require('../../content/theme/custom/images/benefitTEF.png')} />
              <div className="container">
                <div className="card" id="card">
                  <div className="card-header">
              TEF Ready
                  </div>
                  <div className="card-body">
                    <blockquote className="blockquote mb-0">
                      <p>Student reactions to TEF reveal complex challenges for institutions, with both a Bronze problem and a Gold problem.</p>
                      <footer className="blockquote-footer">
                  6% of Students, 10% of BME students would reconsider applying to a gold institution.
                      </footer>
                      <footer className="blockquote-footer">
                  AlumniBase is compatible with the DLHE survey, meaning TEF quality data for lifetime graduate outcomes.
                      </footer>
                      <footer className="blockquote-footer">
                  An instant and ongoing process for collecting and reviewing evidence.
                      </footer>
                      <footer className="blockquote-footer">
                  Save time and money on you TEF Submission.
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div id="meaningfulMarketing">
              <h3 id="subHeading" style={{ paddingTop: '50px' }}>Meaningful Marketing</h3>
              <div className="container">
                <img id="image" alt="logo" src={require('../../content/theme/custom/images/benefitRatings.png')} /><br />
                <h3>88% of consumers trust anonymous online reviews as much as personal recommendation</h3>
                <h5>AlumniBase gives you the power to show applicants how others just like them have succeded after graduating from your university</h5>
                <div className="card">
                  <div className="card-header">
              Marketing tailored to the student
                  </div>
                  <div className="card-body">
                    <blockquote className="blockquote mb-0">
                      <p>Being able to show how students just like the applicant have gone on to succeed after graduation answers much deeper questions while they chose their university.</p>
                      <footer className="blockquote-footer">
                  TEF and Rankings can't answer deep questions like "will i fit in?" and "can i pursue my passion?"
                      </footer>
                      <footer className="blockquote-footer">
                  Tailored messages on outcomes based on an individual's post code, ethnicity or school will resonate far more than a ranking
                      </footer>
                      <footer className="blockquote-footer">
                  Opportunity to say something new and address sudents as an individual
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div id="alumniRelations">
              <h3 id="subHeading" style={{ paddingTop: '50px' }}>Alumni Relations</h3>
              <div className="container">
                <div className="card" id="card">
                  <div className="card-body">
                    <h5 className="card-title">Size matters for fundraising teams...</h5>
                    <p className="card-text">But your budget is limited. AlumniBase helps unlock the opportunity of using big data techniques to make your alumni outreach campaigns more successful.</p>
                  </div>
                </div>
                <div className="card" id="list">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">AlumniBase enhances the University's Alumni Relationship by delivering something useful back to Alumni as they complete the survey.</li>
                    <li className="list-group-item">AlumniBase gets alumni into the habit of giving back with their data at first, before then giving back with time and money.</li>
                    <li className="list-group-item">AlumniBase allows fundraising departments to work smarter with the resources they have; utilising big data will make campaigns more targeted.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="wideningAccess" style={{ paddingTop: '50px' }}>
              <h3 id="subHeading">Widening Access</h3>
              <div className="container">
                <div className="container" id="textBox">
                  <h4 id="heading">Spending by Universities and Colleges on measures in Access Agreements 2015/2016</h4>
                  <div className="row justify-content-center">
                    <div className="col-2">
                      <h3>£120m</h3>
                    </div>
                    <div className="col-10">
                      <h5>On outreach activities to help people with the potential to succeed reach university</h5>
                    </div>
                  </div>

                  <div className="row justify-content-center">
                    <div className="col-2">
                      <h3>£117m</h3>
                    </div>
                    <div className="col-10">
                      <h5>On student success activities to help students stay on courses and improve employability</h5>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-2">
                      <h3>£41m</h3>
                    </div>
                    <div className="col-10">
                      <h5>On progression activities to support disadvantaged students into chosen careers</h5>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
    Understand impact on social mobility
                  </div>
                  <div className="card-body">
                    <p className="card-text">AlumniBase will help provide insights on all key targets for widening participation in your Access Agreements, including BAME, Mature / Part Time and POLAR3.</p>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Employment outcome data is also vital for the TEF Submission.</li>
                      <li className="list-group-item">Using AlumniBase indicative of tackling the problem of social mobility holistically.</li>
                      <li className="list-group-item">Past alumni success can help persuade the audiences your Access Agreement targets to attend your university.</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>


          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Benefits;
