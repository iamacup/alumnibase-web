import React from 'react';

class TEF extends React.Component {
  render() {
    return (

      <div className="container mt-5 pt-5" id="TEF">

        <div className="row justify-content-center mb-5 pt-5">
          <h3 id="subHeading">Teaching Excellence Framework</h3>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-lg-7 p-5">
            <img className="img-fluid" id="image" alt="logo" src={require('../../../content/theme/custom/images/benefitTEF.png')} />
          </div>
          <div className="col-lg-4 pt-lg-5 d-flex justify-content-center">

            <div className="tef-box pt-5 mt-3">
              <h5 id="subHeading">Did You Know?</h5>
              <div className="m-4">
                <h7>6% of Students, 10% of UK-domiciled black and minority ethnic (BME) students would reconsider applying to a gold institution.</h7>
              </div>
            </div>

          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 mx-5 mt-4 pb-5">
            <p>Since TEF2, the Department for Education has <a href="https://www.gov.uk/government/uploads/system/uploads/attachment_data/file/651157/DfE_TEF_Year_2_Lessons_Learned-report.pdf"> published</a> lessons learned, including the decision to halve weighting of the NSS, effectively doubling the importance of employment outcomes data and evidencing this when compiling and submitting the provider submission.  </p>
            <p>AlumniBase picks up where the DLHE leaves off. We believe a six (or 15) month snapshot is useful but that really understanding a lifetime of outcomes requires lifelong measurement of outcomes. Earnings, learning impact and the value of a degree change as people reach new and more demanding career and life goals. </p>
          </div>
        </div>
      </div>
    );
  }
}


export default TEF;
