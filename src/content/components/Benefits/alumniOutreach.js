import React from 'react';

class AlumniOutreach extends React.Component {
  render() {
    return (
      <div className="alumniRelations mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="my-5">
              <h3 id="subHeading">Alumni Outreach</h3>
            </div>
            <div className="pb-5">
              <div className="col-8">
                <h5>Size matters for alumni relations teams, particularly when trying to build a community with alumni that results in them donating their time, experience and of course, funds to their alma mater.</h5>

                <h5>AlumniBase is designed to help your alumni relations teams work smarter with available resources. Big data, though anonymised, can help identify which fundraising campaigns may be most successful with particular sub-groups of graduates.</h5>

                <h5>Further, a strong relationship is based on a two-way flow of value. </h5>
                <h5>AlumniBase returns insights that alumni can use to maximise their earning potential, while also providing an opportunity for alumni to start developing the habit of ‘giving back’, first with their data which all alumni are in a position to give.</h5>

              </div>
              <div className="col-4">
                <img src={require('../../theme/custom/images/recruitment.png')} alt="recruitment" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AlumniOutreach;
