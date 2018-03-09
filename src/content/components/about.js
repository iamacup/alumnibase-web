import React from 'react';
import Navbar from './navbar2';
import Footer from './footer';

class About extends React.Component {
  componentDidMount() {
    console.log('About page mounted');
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container" id="aboutPage">
          <div className="mb-4">
            <h3 style={{ fontWeight: '600' }}>AlumniBase</h3>
          </div>
          <div className="mb-4">
            <div className="row">
              <div className="col">
                <h5>What is AlumniBase?</h5>
                <div className="row">
                  <div className="col">
                    <h6>AlumniBase was born out of what we learned from our time creating a salary transparency platform for graduates at -<a href="www.sliips.com">www.sliips.com.</a></h6>
                    <h6>While we helped many users understand if their pay was fair and to negotiate higher pay when it wasn’t, we found many felt their options were limited as their education was completed and they were embedded in an industry.</h6>
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
                    <h6 className="text-justify">
            To help realise our mission of helping people make better career choices and to help social mobility, we realised the type of insights we could give needed to be consumed as early as possible, by people who could use it to plan their education and career. Essentially, by students.
            We thought hard about it and have created AlumniBase, a mechanism where alumni can feedback to their university on their outcomes, and universities can deliver this information to their students to help them plan their careers.
                    </h6>
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
                    <h6 className="text-justify">
            As part of this mission, we have three key principles that inform how we go about things.
                    </h6>
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
                  <p className="card-text text-justify">It's our aim to provide alumni outcome data and insights that universities and students can use with confidence.</p>
                </div>
              </div>
            </div>
            <div className="col-lg d-flex align-items-stretch">
              <div id="principles" className="card border-info mb-3">
                <div className="card-header">2. Transparency</div>
                <div className="card-body text-info">
                  <p className="card-text text-justify">We believe in transparency (clearly) showing how things work to alumni, students and universities.</p>
                </div>
              </div>
            </div>
            <div className="col-lg">
              <div className="card border-info mb-3">
                <div className="card-header">3. Service</div>
                <div className="card-body text-info">
                  <p className="card-text text-justify">We’ll work to make things work best for you. We believe complex problems deserves custom answers, and that we need to take care of everything so that you just have to focus on the insights we deliver. So, if you need something not on the ‘menu’, just ask and we’ll take care of the rest.
                  </p>
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
