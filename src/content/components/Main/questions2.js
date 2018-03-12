import React from 'react';

class Questions extends React.Component {
  handleEmail(e) {
    console.log('emailButton');
  }

  render() {
    return (
      <div className="questions2 p-4">
        <h4 id="title">Still have questions?</h4>
        <div className="container">
          <div className="row justify-content-center">

            <div className="col-sm-4 order-sm-12 my-4">
              <label htmlFor="exampleInputEmail1" style={{ fontWeight: '600' }}>Email us</label>
              <div className="mb-2">
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Your Email" />
              </div>
              <div className="mb-2">
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Comments" rows="3" />
              </div>
              <button type="button" className="btn btn-outline-light" onClick={e => this.handleEmail(e)}>Send</button>
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
