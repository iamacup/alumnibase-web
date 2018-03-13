import React from 'react';
import Form from './form';

class Questions extends React.Component {
  render() {
    return (
      <div className="questions2 p-4">
        <h4 id="title">Still have questions?</h4>
        <div className="container">
          <div className="row justify-content-center">

            <div className="col-sm-4 order-sm-12 my-4">
              <Form />
            </div>

            <div className="col-sm-4 order-sm-1 my-4">
              <h5 style={{ fontWeight: '600' }}>Find out about:</h5>
              <div className="card">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><a href="GDPR">GDPR Compliant</a></li>
                  <li className="list-group-item"><a href="dq">Data Quality</a></li>
                  <li className="list-group-item"><a href="surveying">Surveying</a></li>
                </ul>
              </div>
            </div>


          </div>
        </div>
      </div>

    );
  }
}

export default Questions;
