import React from 'react';

class WhatWeDo extends React.Component {
  componentDidMount() {
    console.log('WhatWeDo mounted');
  }

  render() {
    return (
      <div className="whatWeDo2">

        <div className="container">
          <div className="row justify-content-center py-5">
            <h2 id="title">What we do</h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg d-flex align-items-stretch">
              <div className="card mt-4 mt-md-0">
                <div className="card-header" style={{ backgroundColor: '#f7786b' }}>
                  <div style={{ margin: '0 30%' }}>
                    <img className="img-fluid" alt="logo" src={require('../../../content/theme/custom/images/TEF.png')} />
                  </div>
                </div>
                <div className="p-3">
                  <h5 className="card-title">Teaching Excellence Framework</h5>
                  <p className="card-text">Our survey is designed to give you lifelong employment outcomes to use in your written TEF submission.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg d-flex align-items-stretch">
              <div className="card mt-4 mt-md-0">
                <div className="card-header" style={{ backgroundColor: '#91a8d0' }}>
                  <div style={{ margin: '0 30%' }}>
                    <img className="img-fluid" alt="logo" src={require('../../../content/theme/custom/images/alumni.png')} />
                  </div>
                </div>
                <div className="p-3">
                  <h5 className="card-title">Understanding Alumni</h5><br />
                  <p className="card-text">Build life-long relationships with alumni by giving them something of value they can use to maximise their earning potential.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg d-flex align-items-stretch">
              <div className="card mt-4 mt-lg-0">
                <div className="card-header" style={{ backgroundColor: '#034f84' }}>
                  <div style={{ margin: '0 31%' }}>
                    <img className="img-fluid" alt="logo" src={require('../../../content/theme/custom/images/lifelong.png')} />
                  </div>
                </div>
                <div className="p-3">
                  <h5 className="card-title">Lifelong Value of a Degree</h5>
                  <p className="card-text">Understand both financial and non-financial value of a degree across a graduate's entire career. </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg d-flex align-items-stretch">
              <div className="card mt-4 mt-lg-0">
                <div className="card-header" style={{ backgroundColor: '#f7cac9' }}>
                  <div style={{ margin: '0 28%' }}>
                    <img className="img-fluid" alt="logo" src={require('../../../content/theme/custom/images/recruitment.png')} />
                  </div>
                </div>
                <div className="p-3">
                  <h5 className="card-title">Student Recruitment</h5><br />
                  <p className="card-text">Get specific marketing messages that will resonate with students, wherever they come from.</p>
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
