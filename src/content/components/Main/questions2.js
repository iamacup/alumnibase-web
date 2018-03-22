import React from 'react';
import Form from './form';

export default() => (
  <div className="questions2 p-4">
    <h4 id="title">Still have questions?</h4>
    <div className="container">
      <div className="row justify-content-center">

        <div className="col-sm-4 order-sm-12 my-4">
          <div className="wow slideInRight" data-wow-duration="0.5s" data-wow-delay="0.75s">
            <Form />
          </div>
        </div>

        <div className="col-sm-4 order-sm-1 my-4">
          <div className="wow slideInLeft" data-wow-duration="0.5s" data-wow-delay="0.25s">
            <h5 style={{ fontWeight: '600' }}>Find out about:</h5>
            <div className="card">
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><a href="/legal">GDPR Compliant</a></li>
                <li className="list-group-item"><a href="/data">Data Quality</a></li>
                <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example">
                  <li className="list-group-item"><a href="#survey">Surveying</a></li>
                </div>
              </ul>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>

);
