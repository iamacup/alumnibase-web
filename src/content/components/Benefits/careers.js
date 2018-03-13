import React from 'react';

class Careers extends React.Component {
  render() {
    return (
      <div className="container" id="careers">
        <div className="row justify-content-center">
          <div className="my-5">
            <h3 id="subHeading">Careers</h3>
          </div>
        </div>
        <div className="row justify-content-center pb-5 mx-5">
          <h5>At Sliips.com our service was designed to help graduates understand career paths after their initial grad scheme, how they can ensure they’re paid fairly and how to maximise their earning potential.</h5>
        </div>
        <div className="row justify-content-center">
          <div className="col-8">
            <img className="img-fluid" src={require('../../theme/custom/images/sliipsdata.png')} alt="careers" />
          </div>
        </div>
        <div className="row justify-content-center mx-5 p-5">


          <h5>Based on user feedback, being able to show career paths and salaries based on real payslips meant that our users were more confident about negotiating salaries each year, thereby increasing their career lifetime earnings.</h5>
          <h5>What we also found was that people did not know that completing a certain degree still meant they could find ways into high earning industries with the right experience. </h5>
          <h5>We believe delivering this information to students while they are still at university and in the crucial first few years of graduating can enable students to optimise around this more effectively.
          </h5>

        </div>
      </div>

    );
  }
}

export default Careers;
