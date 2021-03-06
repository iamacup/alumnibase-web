import React from 'react';

class HowItWorks extends React.Component {
  componentDidMount() {
    console.log('HowItWorks mounted');
  }

  render() {
    return (
      <div id="howItWorks2">
        <div className="my-5" style={{ textAlign: 'center' }}>
          <h2 id="title">How it works</h2>
        </div>
        <div className="mb-5">
          <div className="container" id="innerWrapper">
            <div className="row justify-content-around" id="howItWorksRow">
              <div className="col-md">
                <div className="my-3">
                  <div className="wow bounceIn" data-wow-duration="1s" data-wow-delay="0.30s">
                    <i id="icon" className="fal fa-pencil-alt" />
                  </div>
                </div>
                <h5>Survey Alumni</h5>
              </div>

              <div className="col">
                <i id="arrow1" className="far fa-long-arrow-right" style={{ paddingTop: '8vh' }} />
                <p className="text-muted">Beautiful survey for all generations.</p>
              </div>
              <div className="col-md">
                <div className="my-3">
                  <div className="wow bounceIn" data-wow-duration="1s" data-wow-delay="0.50s">

                    <i id="icon" className="fal fa-database" />
                  </div>
                </div>
                <h5>Analyse the Data</h5>
              </div>
              <div className="col">
                <i id="arrow1" className="far fa-long-arrow-right" style={{ paddingTop: '8vh' }} />
                <p className="text-muted">In our tool or via export to Tableau.</p>
              </div>
              <div className="col-md">
                <div className="my-3">
                  <div className="wow bounceIn" data-wow-duration="1s" data-wow-delay="0.75s">

                    <i id="icon" className="fal fa-chart-line" />
                  </div>
                </div>
                <h5>Use in TEF, Careers</h5>
                <h5> and Recruitment</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HowItWorks;
