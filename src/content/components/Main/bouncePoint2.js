import React from 'react';

class BouncePoint extends React.Component {
  render() {
    return (
      <div className="bounceOuter">
        <div className="container" id="bouncePoint">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="false">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
              <li data-target="#carouselExampleIndicators" data-slide-to="1" />
              <li data-target="#carouselExampleIndicators" data-slide-to="2" />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active text-center">
                <div className="carousel-margin">
                  <img className="img-fluid" alt="logo" width="30%" src={require('../../../content/theme/custom/images/TEF2.png')} />
                  <h5>Teaching Excellence Framework</h5>
                  <h6>AlumniBase is compatible with the DLHE survey, <br /> meaning TEF quality data for lifetime graduate outcomes.</h6>
                </div>
              </div>
              <div className="carousel-item text-center">
                <div className="carousel-margin">
                  <img className="img-fluid" alt="logo" width="25%" src={require('../../../content/theme/custom/images/recruitment2.png')} />
                  <h5>Student Recruitment</h5>
                  <h6>Showing applicants how students like them have gone on to succeed <br /> answers much deeper questions when selecting a university.</h6>
                </div>
              </div>
              <div className="carousel-item text-center">
                <div className="carousel-margin">
                  <img className="img-fluid" alt="logo" width="30%" src={require('../../../content/theme/custom/images/employability.png')} />
                  <h5>Employability</h5>
                  <h6>The insights we return to alumni will help them <br /> maximise their earning potential.</h6>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BouncePoint;
