import React from 'react';

class VirtuousCircle extends React.Component {
  render() {
    return (
      <div id="virtuousCircle">
        <div className="container py-5 text-center">
          <div className="mb-3">
            <div className="row justify-content-center">
              <div className="col-lg-4">
                <h5 id="heading">AlumniBase Survey</h5>
                <h6>Understanding of Alumni Outcomes, data delivered back across the student life cycle.</h6>
              </div>
            </div>
          </div>


          <div className="row">


            <div className="col-lg-4 align-self-center">
              <h5 id="heading">Better Alumni Outcomes</h5>
              <h6>More students, better equipped for employment will improve graduate outcomes and improve your next survey.</h6>
            </div>

            <div className="col-4">
              <div className="d-none d-lg-block">
                <div className="m-3">
                  <img className="img-fluid" alt="logo" src={require('../../../content/theme/custom/images/virtuousCircle.png')} />
                </div>
              </div>
            </div>
            <div className="col-lg-4 align-self-center">
              <h5 id="heading">Better Student Recruitment</h5>
              <h6>More tailored marketing messages that resonate with individuals can increase student recruitment</h6>
            </div>


          </div>


          <div className="mt-2">
            <div className="row justify-content-center">
              <div className="col-lg-4">
                <h5 id="heading">Better Careers Service</h5>
                <h6>Show students the full range of career options and how they can fit in to improve employment outcomes</h6>
              </div>
            </div>
          </div>


        </div>
      </div>
    );
  }
}

export default VirtuousCircle;
