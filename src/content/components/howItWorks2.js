import React from 'react';

class HowItWorks extends React.Component {
  componentDidMount() {
    console.log('HowItWorks mounted');
  }

  render() {
    return (
      <div id="howItWorks2">
        <div className="row justify-content-center py-5">
          <h2 id="title">How it works</h2>
        </div>
        <div className="mb-5">
          <div className="container" id="innerWrapper">
            <div className="row justify-content-around" id="howItWorksRow">
              <div className="col-md">
                <div className="my-3">
                  <i id="icon" className="fal fa-pencil-alt" />
                </div>
                <h5>Survey Alumni</h5>
              </div>

              <div className="col">
                <i id="arrow1" className="far fa-long-arrow-right" style={{ paddingTop: '8vh' }} />
                <p className="text-muted">managed and analysed Beautiful survey for all generations</p>
              </div>
              <div className="col-md">
                <div className="my-3">
                  <i id="icon" className="fal fa-database" />
                </div>
                <h5>Analyse the Data</h5>
              </div>
              <div className="col">
                <i id="arrow1" className="far fa-long-arrow-right" style={{ paddingTop: '8vh' }} />
                <p className="text-muted">in our tool or via expert to tableu etc.</p>
              </div>
              <div className="col-md">
                <div className="my-3">
                  <i id="icon" className="fal fa-chart-line" />
                </div>
                <h5>Use in TEF</h5>
                <h5>widening access etc.</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HowItWorks;
