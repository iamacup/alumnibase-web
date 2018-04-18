import React from 'react';

import Navbar from '../../../../content/components/NewNavbar';
import Footer from '../../../../content/components/Footer';

class About extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="about-header">
          <div className="about-background">
            <div className="stripe s0" />
            <div className="stripe s2 pattern" />
          </div>
          <div className="about-background accelerated">
            <div className="stripe s1" />
            <div className="stripe s3" />
            <div className="stripe s4" />
          </div>
        </div>
        <div className="about-page">
          <div className="container">
            <div className="text-center dark-blue-header-text">
              <p style={{ fontSize: '26px', lineHeight: '33px' }}>About AlumniBase</p>
              <p style={{ fontSize: '24px', lineHeight: '36px', fontWeight: '400' }} />
            </div>

            <div className="row pt-5 mt-5 justify-content-center align-content-center">
              <div className="col-lg-6">
                <div className="cycle-text">
                  <div className="mb-5">

                    <p className="dark-blue-main-text">AlumniBase was born out of what we learned from our time creating a salary transparency platform for graduates at <a className="text-info" href="www.sliips.com">www.sliips.com</a>.</p>
                    <p className="dark-blue-main-text">While we have helped many users understand if their pay was fair and to negotiate higher pay when it wasn’t, we also found many felt their options were limited as their education was completed and they were embedded in an industry.</p>

                  </div>
                  <h5 className="dark-blue-header-text">Our Mission</h5>
                  <p className="dark-blue-main-text">To achieve our mission to help people make better career choices and to facilitate social mobility, we realise the type of insights we provide need to be accessed as early as possible, by people who can use them to plan their education and career.</p>
                  <p className="dark-blue-main-text">It needs to be seen by students</p>
                  <p className="dark-blue-main-text">We thought hard about it and have created AlumniBase, a mechanism through which alumni can feedback to their university on their outcomes, and can deliver this information to students to help them plan their careers.</p>
                </div>
              </div>
              <div className="col-lg-6 text-center mt-5 pt-5 mt-lg-0 pt-lg-0">
                <div className="cycle-text">
                  <h5 className="dark-blue-header-text">Our 3 Core Principles</h5>
                  <p className="dark-blue-main-text mx-5">As part of this mission, we have three key principles that inform how we go about things.</p>

                  <div className="principles">
                    <li>
                      <div className="card-header"><h5 className="dark-blue-header-text" style={{ fontSize: '18px' }}>Dependability</h5></div>
                      <div className="card-body text-info">
                        <p id="text" className="card-text text-left">Through providing alumni outcome data and insights that universities and students can use with confidence.</p>
                      </div>
                    </li>

                    <li><div className="card-header mt-2"><h5 className="dark-blue-header-text" style={{ fontSize: '18px' }}>Transparency</h5></div>
                      <div className="card-body text-info">
                        <p id="text" className="card-text text-left">Considering our background, it’s no surprise we believe in transparency to clearly show how our service works to alumni, students and universities. </p>
                      </div>
                    </li>

                    <li><div className="card-header mt-2"><h5 className="dark-blue-header-text" style={{ fontSize: '18px' }}>Service</h5></div>
                      <div className="card-body text-info">
                        <p className="card-text text-left">We believe complex problems deserve customised answers: we take care of everything so you just have to focus on the insights we deliver.
                        </p>
                      </div>
                    </li>
                  </div>
                  <br />
                  <p className="dark-blue-main-text mx-5">So, if you need something not on the ‘menu’, just ask and we’ll take care of the rest.</p>
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

export default About;
