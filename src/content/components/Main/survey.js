import React from 'react';

class Survey extends React.Component {
  render() {
    return (
      <div className="survey py-5" id="survey">
        <div className="container">
          <div className="row">

            <div className="offset-md-1 col-lg-4 d-flex align-items-center">
              <img className="img-fluid" id="image" alt="survey" src={require('../../theme/custom/images/survey.png')} />
            </div>

            {/* Start of column 2 outer */}
            <div className="offset-md-1 col-lg-6">


              <div className="my-4">
                <div className="row">
                  <div className="col-sm-2 p-2 d-flex align-items-center">
                    <div className="header-image">
                      <div className="wow bounceIn" data-wow-duration="1s" data-wow-delay="0.75s">
                        <img className="img-fluid" alt="survey" src={require('../../theme/custom/images/surveyResults.png')} />
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-8 text-center text-sm-left">
                    <h5 id="heading">21st Century Surveying</h5>
                    <h6>Means surveys that look great and return results immediately to the people who take it. </h6>
                  </div>
                </div>
              </div>

              <div className="my-4">
                <div className="row">
                  <div className="col-sm-2 d-flex align-items-center">
                    <div className="header-image">
                      <div className="wow bounceIn" data-wow-duration="1s" data-wow-delay="0.95s">
                        <img className="img-fluid" alt="survey" src={require('../../theme/custom/images/seedSurvey.png')} />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-8 text-center text-sm-left">
                    <h5 id="heading">Seed Survey with HEI Data</h5>
                    <h6>Sharing some data with us can help optimise the survey or allow us to conduct survey for you.</h6>
                  </div>
                </div>
              </div>

              <div className="my-4">
                <div className="row">
                  <div className="col-sm-2 d-flex align-items-center">
                    <div className="header-image">
                      <div className="wow bounceIn" data-wow-duration="1s" data-wow-delay="1.15s">
                        <img className="img-fluid" alt="survey" src={require('../../theme/custom/images/surveyOnly.png')} />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-8 text-center text-sm-left">
                    <h5 id="heading">Survey Only</h5>
                    <h6>AlumniBase has been designed to run without increasing your GDPR responsibilities at all.</h6>
                  </div>
                </div>
              </div>


            </div>
            {/* end of column 2 outer */}

          </div>
        </div>
      </div>
    );
  }
}

export default Survey;
