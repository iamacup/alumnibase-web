import React from 'react';
import Navbar from './navbar2';
import Footer from './footer';

class DataQualityPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div id="dqPage">
          <div className="my-5 ml-5">
            <h3 id="title">Data Insights</h3>
          </div>
          <div className="py-5 mb-5" id="firstBox">
            <div className="container" id="analytics">
              <div className="card" id="card" style={{ width: '36rem' }}>
                <div className="card-header">
    Data Effective
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Ongoing Collection</li>
                    <li className="list-group-item">Clear Joined Up Reporting</li>
                    <li className="list-group-item">Single View of a Student</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <div className="row justify-content-center" id="student">
              <div className="col-md-2">
                <img alt="student" src={require('../theme/custom/images/singleStudent.png')} style={{ height: '200px' }} />
              </div>
              <div className="col-8">

                <div className="card" id="card">
                  <div className="card-header">
    Single View of a Student
                  </div>
                  <div className="card-body">
                    <p className="card-text">
Generating a full view of students enables understanding the full cycle of a student studying at a HE institution, from application to life long employment outcomes
                    </p>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Lifetime outcomes used with LEO and DLHE Data to supplement regulatory submissions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <div id="secondBox">
              <div className="container" id="analytics">
                <div className="card" id="card" style={{ width: '36rem' }}>
                  <img className="card-img-top" src={require('../theme/custom/images/dataAnalytics.png')} alt="Card cap" />
                  <div className="card-body">
                    <h5 className="card-title">Analytics</h5>
                    <p className="card-text">Fully GDPR Compliant Solution means aggregate results are returned in a web portal that splits relevant information up for appropriate departments/ activities.</p>
                  </div>
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

export default DataQualityPage;
