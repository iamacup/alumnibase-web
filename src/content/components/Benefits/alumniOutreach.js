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
              <div className="card" id="list">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">AlumniBase enhances the University's Alumni Relationship by delivering something useful back to Alumni as they complete the survey.</li>
                  <li className="list-group-item">AlumniBase gets alumni into the habit of giving back with their data at first, before then giving back with time and money.</li>
                  <li className="list-group-item">AlumniBase allows fundraising departments to work smarter with the resources they have; utilising big data will make campaigns more targeted.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AlumniOutreach;
