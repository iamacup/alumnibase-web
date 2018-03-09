import React from 'react';

class WhatWeDo extends React.Component {
  componentDidMount() {
    console.log('WhatWeDo mounted');
  }

  render() {
    return (
      <div className="whatWeDo2">

        <h2 id="title">What we do</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg d-flex align-items-stretch">
              <div className="card mt-4 mt-md-0">
                <div className="card-header" style={{ backgroundColor: '#f7786b' }}>
                  <div style={{ margin: '0 30%' }}>
                    <img className="img-fluid" alt="logo" src={require('../../content/theme/custom/images/TEF.png')} />
                  </div>
                </div>
                <div className="p-3">
                  <h5 className="card-title">Teaching Excellence Framework</h5>
                  <p className="card-text">Our survey is designed to give you lifelong employment outcomes to use in your written TEF Response.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg d-flex align-items-stretch">
              <div className="card mt-4 mt-md-0">
                <div className="card-header" style={{ backgroundColor: '#91a8d0' }}>
                  <div style={{ margin: '0 30%' }}>
                    <img className="img-fluid" alt="logo" src={require('../../content/theme/custom/images/alumni.png')} />
                  </div>
                </div>
                <div className="p-3">
                  <h5 className="card-title">Understanding Alumni</h5>
                  <p className="card-text">Give something of value to build relationships with alumni while also developing smarter ways to fundraise.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg d-flex align-items-stretch">
              <div className="card mt-4 mt-lg-0">
                <div className="card-header" style={{ backgroundColor: '#034f84' }}>
                  <div style={{ margin: '0 30%' }}>
                    <img className="img-fluid" alt="logo" src={require('../../content/theme/custom/images/lifelong.png')} />
                  </div>
                </div>
                <div className="p-3">
                  <h5 className="card-title">Lifelong Value of a Degree</h5>
                  <p className="card-text">Understand the monetary and non financial value of a degree. Important to know as policy review is ongoing.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg d-flex align-items-stretch">
              <div className="card mt-4 mt-lg-0">
                <div className="card-header" style={{ backgroundColor: '#f7cac9' }}>
                  <div style={{ margin: '0 30%' }}>
                    <img className="img-fluid" alt="logo" src={require('../../content/theme/custom/images/recruitment.png')} />
                  </div>
                </div>
                <div className="p-3">
                  <h5 className="card-title">Student Recruitment</h5>
                  <p className="card-text">Get specific marketing messages that will resonate with students, no matter where they come from.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <hr style={{ width: '40vw' }} />
      </div>

    );
  }
}

export default WhatWeDo;
