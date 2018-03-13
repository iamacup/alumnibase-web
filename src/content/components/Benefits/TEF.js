import React from 'react';

class TEF extends React.Component {
  render() {
    return (

      <div className="container mt-5 p-5" id="TEF">

        <div className="row justify-content-center mb-5">
          <h3 id="subHeading">Teaching Excellence Framework</h3>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-lg-7 p-5">
            <img className="img-fluid" id="image" alt="logo" src={require('../../../content/theme/custom/images/benefitTEF.png')} />
          </div>
          <div className="col-lg-4 pt-5 d-flex align-content-center">

            <div className="tef-box pt-5 mt-3">
              <h5 id="subHeading">Did You Know?</h5>
              <div className="m-4">
                <h7>6% of Students, 10% of UK-domiciled black and minority ethnic (BME) students would reconsider applying to a gold institution.</h7>
              </div>
            </div>

          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 mx-5 mt-4">
            <p>Since TEF2, the Department for Education has published lessons learnt indicating that the weighting of the NSS is being halved, effectively meaning that employment outcomes data are now doubly important when compiling and submitting the provider submission.

AlumniBase picks up where the DLHE leaves off. We believe a six (or 15) month snapshot is useful but to really understand a lifetime of outcomes requires lifelong measurement to understand earnings, learning gain and the value of a degree as people reach new and more demanding career and life goals.
            </p>
            <footer className="blockquote-footer">Get in touch <a href="mailto:hello@Sliips.com?Subject=Hello">here</a> to find out more</footer>

          </div>
        </div>
      </div>
    );
  }
}


export default TEF;
