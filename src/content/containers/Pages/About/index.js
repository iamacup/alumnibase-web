import React from 'react';
import Helmet from 'react-helmet';

import Navbar from '../../../../content/components/Navbar';
import Footer from '../../../../content/components/Footer';

class About extends React.Component {
  componentDidMount() {
    console.log('About page mounted');
  }

  render() {
    return (
      <div>
        <Navbar />
        <Helmet title="About Us" />
        <div className="container mb-5" id="aboutPage">
          <div className="mb-4">
            <h3 style={{ fontWeight: '600' }}>AlumniBase</h3>
          </div>
          <div className="mb-4">
            <div className="row">
              <div className="col">
                <h5>What is AlumniBase?</h5>
                <div className="row">
                  <div className="col">
                  AlumniBase was born out of what we learned from our time creating a salary transparency platform for graduates at <a href="www.sliips.com">www.sliips.com</a>. While we have helped many users understand if their pay was fair and to negotiate higher pay when it wasn’t, we also found many felt their options were limited as their education was completed and they were embedded in an industry.

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="row">
              <div className="col">
                <h5>Our Mission</h5>
                <div className="row">
                  <div className="col">
            To achieve our mission to help people make better career choices and to facilitate social mobility, we realise the type of insights we provide need to be accessed as early as possible, by people who can use them to plan their education and career. It needs to be seen by students.

We thought hard about it and have created AlumniBase, a mechanism through which alumni can feedback to their university on their outcomes, and can deliver this information to students to help them plan their careers.

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="row">
              <div className="col">
                <h5>Our 3 Core Principles</h5>
                <div className="row">
                  <div className="col">
As part of this mission, we have three key principles that inform how we go about things.
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="row">
            <div className="col-lg d-flex align-items-stretch">
              <div id="principles" className="card border-info mb-3">
                <div className="card-header">1. Dependability</div>
                <div className="card-body text-info">
                  <p id="text" className="card-text text-left">Through providing alumni outcome data and insights that universities and students can use with confidence.</p>
                </div>
              </div>
            </div>
            <div className="col-lg d-flex align-items-stretch">
              <div id="principles" className="card border-info mb-3">
                <div className="card-header">2. Transparency</div>
                <div className="card-body text-info">
                  <p id="text" className="card-text text-left">Considering our background, it’s no surprise we believe in transparency to clearly show how our service works to alumni, students and universities. </p>
                </div>
              </div>
            </div>
            <div className="col-lg">
              <div id="principles" className="card border-info mb-3">
                <div className="card-header">3. Service</div>
                <div className="card-body text-info">
                  <p id="text" className="card-text text-left">We believe complex problems deserve customised answers: we take care of everything so you just have to focus on the insights we deliver.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
          So, if you need something not on the ‘menu’, just ask and we’ll take care of the rest.
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
