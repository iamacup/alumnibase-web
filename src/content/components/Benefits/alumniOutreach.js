import React from 'react';

class AlumniOutreach extends React.Component {
  render() {
    return (
      <div className="alumniRelations mt-5 py-5" id="alumniRelations">
        <div className="container">
          <div className="row justify-content-center py-5">
            <h3 id="subHeading">Alumni Outreach</h3>
          </div>
          <div className="row justify-content-center pb-md-5">
            <p>Size matters for alumni relations teams, particularly when trying to build a community with alumni that results in them donating their time, experience and of course, funds to their alma mater.</p>
            <p>AlumniBase is designed to help your alumni relations teams work smarter with available resources. Big data, though anonymised, can help identify which fundraising campaigns may be most successful with particular sub-groups of graduates. Further, a strong relationship is based on a two-way flow of value. </p>
          </div>
          <div className="row justify-content-center pb-md-5">
            <div className="col-lg-6 order-lg-12 d-flex justify-content-center text-right">
              <div className="wow fadeIn" data-wow-duration="1.0s" data-wow-delay="0.25s">
                <img className="img-fluid" id="fundraising-image" src={require('../../theme/custom/images/fundraisingBenefits.png')} alt="recruitment" />
                <figcaption className="pb-3"><a href="http://www.case.org/Documents/Research/Ross-CASE/Ross_CASE_UK_2017_v5.pdf">Source - The Guardian</a></figcaption>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1 d-flex justify-content-center">
              <div className="card">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Average number of fundraising staff is 6</li>
                  <li className="list-group-item">Oxford and Cambridge combined total is 366</li>
                  <li className="list-group-item">More than half of lower performing departments were formed before 2004</li>
                  <li className="list-group-item">Four / 16 best performing fundraisers not part of the Russel Group</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row justify-content-center pb-md-5">
            <p>AlumniBase returns insights that alumni can use to maximise their earning potential, while also providing an opportunity for alumni to start developing the habit of ‘giving back’, first with their data which all alumni are in a position to give.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AlumniOutreach;
