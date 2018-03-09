import React from 'react';

class Survey extends React.Component {
  render() {
    return (
      <div className="survey py-5">
        <div className="container">
          <div className="row">

            <div className="offset-md-1 col-lg-4 d-flex align-items-center">
              <img className="img-fluid" id="image" alt="survey" src={require('../theme/custom/images/survey.png')} />
            </div>

            {/* Start of column 2 outer */}
            <div className="offset-md-1 col-lg-6">


              <div className="my-4">
                <div className="row">
                  <div className="col-sm-2  d-flex align-items-center">
                    <div className="header-image">
                      <img className="img-fluid" alt="survey" src={require('../theme/custom/images/surveyResults.png')} />
                    </div>
                  </div>

                  <div className="col-sm-8 text-center text-sm-left">
                    <h5 id="heading">21st Century Surveying</h5>
                    <h6>means surveys look good, results are returned immediately to respondents and the survey is customisable.</h6>
                  </div>
                </div>
              </div>

              <div className="my-4">
                <div className="row">
                  <div className="col-sm-2 d-flex align-items-center">
                    <div className="header-image">
                      <img className="img-fluid" alt="survey" src={require('../theme/custom/images/seedSurvey.png')} />
                    </div>
                  </div>
                  <div className="col-sm-8 text-center text-sm-left">
                    <h5 id="heading">Seed Survey with HE Data</h5>
                    <h6>Sharing some of your data with us can help optimise the survey or allow us to conduct the outreach for survey completion for you.</h6>
                  </div>
                </div>
              </div>

              <div className="my-4">
                <div className="row">
                  <div className="col-sm-2 d-flex align-items-center">
                    <div className="header-image">
                      <img className="img-fluid" alt="survey" src={require('../theme/custom/images/surveyOnly.png')} />
                    </div>
                  </div>
                  <div className="col-sm-8 text-center text-sm-left">
                    <h5 id="heading">Survey Only</h5>
                    <h6>It is possible to run the survey without increasing your GDPR responsibilities, as we form individual consenting relationships with survey respondents and pass the anonymised aggregate data back to you.</h6>
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
