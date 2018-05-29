import React from 'react';

import Navbar from '../../../../content/components/NewNavbar';
import Footer from '../../../../content/components/Footer';

const About = () => (
  <div>
    <Navbar />
    <div className="about-header">
      <div className="about-background">
        <div className="stripe s0" />
        <div className="stripe s2" />
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

        <div className="row pt-5 mt-5 mb-5 pb-5 justify-content-center align-content-center">
          <div className="col-lg-6 align-self-center">
            <div className="wow fadeInUp" data-wow-duration="0.50s" data-wow-delay="0.5s">

              <div className="text-one text-center cycle-text">
                <h5 className="dark-blue-header-text">Who We Are</h5>
                <hr />
                <p className="dark-blue-main-text">AlumniBase was born out of what we learned from our time creating a salary transparency platform for graduates at <a className="text-info" href="www.sliips.com">www.sliips.com</a>.</p>
                <p className="dark-blue-main-text">While we have helped many users understand if their pay was fair and to negotiate higher pay when it wasn’t, we also found many felt their options were limited as their education was completed and they were embedded in an industry.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-center mt-5 pt-5 mt-lg-0 pt-lg-0">
            <div className="text-two cycle-text">
              <h5 className="header-text" style={{ color: '#e6ebf1' }}>Our Mission</h5>
              <hr style={{ backgroundColor: '#e6ebf1' }} />
              <p className="dark-blue-main-text" style={{ color: '#c6cbd1 ' }}>To achieve our mission to help people make better career choices we realised career insights need to be accessed as early as possible, so people can use them to plan their education and career.</p>
              <p className="dark-blue-main-text" style={{ color: '#c6cbd1 ' }}>It needs to be seen by students</p>
              <p className="dark-blue-main-text" style={{ color: '#c6cbd1 ' }}>That's why we've created AlumniBase, a surveying tool where alumni can feedback to their university on their outcomes, and the career insights can be delivered to students to help them plan their careers.</p>
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col-lg-6 align-self-center text-center">
            <div className="cycle-text">
              <h5 className="dark-blue-header-text">Our 3 Core Principles</h5>
              <p className="dark-blue-main-text mx-sm-5 px-sm-5">As part of this mission, we have three key principles that inform how we go about things.</p>
              <p className="dark-blue-main-text mx-sm-5 px-sm-5">So, if you need something not on the ‘menu’, just ask and we’ll take care of the rest.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row mb-3">
              <div className="wow fadeIn" data-wow-duration="1.25s" data-wow-delay="0.5s">
                <div className="my-card box-1" style={{ padding: 0 }}>
                  <div className="row">
                    <div className="col-md-9">
                      <div className="p-4">
                        <div className="card-title">
                          <h5 className="dark-blue-header-text" style={{ fontSize: '18px' }}>Dependability</h5>
                        </div>
                        <p id="text" className="card-text text-left">Through providing alumni outcome data and insights that universities and students can use with confidence.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="wow fadeInUp" data-wow-duration="0.25s" data-wow-delay="0.5s">
                <div className="my-card box-1" style={{ padding: 0 }}>
                  <div className="row">
                    <div className="col-md-9">
                      <div className="p-4">
                        <div className="card-title">
                          <h5 className="dark-blue-header-text" style={{ fontSize: '18px' }}>Transparency</h5>
                        </div>
                        <p id="text" className="card-text text-left">Considering our background, it’s no surprise we believe in transparency to clearly show how our service works to alumni, students and universities. </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="wow fadeInUp" data-wow-duration="1.00s" data-wow-delay="0.5s">
                <div className="my-card box-1" style={{ padding: 0 }}>
                  <div className="row">
                    <div className="col-md-9">
                      <div className="p-4">
                        <div className="card-title">
                          <h5 className="dark-blue-header-text" style={{ fontSize: '18px' }}>Service</h5>
                        </div>
                        <p className="card-text text-left">We believe complex problems deserve customised answers: we take care of everything so you just have to focus on the insights we deliver.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <Footer />
  </div>
);

export default About;
