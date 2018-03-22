import React from 'react';

export default () => (
  <div className="container" id="careers">
    <div className="row justify-content-center">
      <div className="my-5 pt-5">
        <h3 id="subHeading">Careers</h3>
      </div>
    </div>
    <div className="row justify-content-center pb-4 mx-5">
      <p>At <a href="https://www.sliips.com/">Sliips.com</a> our service was designed to help graduates understand career paths after their initial grad scheme, how they can ensure they’re paid fairly and how to maximise their earning potential.</p>
    </div>
    <div className="row justify-content-center">
      <div className="col-8">
        <figcaption className="text-center" id="image-caption">Career Progression at Top Consulting Companies</figcaption>
        <img className="img-fluid" id="image" src={require('../../theme/custom/images/sliipsdata.png')} alt="careers" />
      </div>
    </div>
    <div className="row justify-content-center mx-5 p-md-5 p-sm-2">
      <p>Based on user feedback, being able to show career paths and salaries based on real payslips meant that our users were more confident about negotiating salaries each year, thereby increasing their career lifetime earnings.</p>
      <p>What we also found was that people did not know that completing a certain degree still meant they could find ways into high earning industries with the right experience. </p>
      <p>We believe delivering this information to students while they are still at university and in the crucial first few years of graduating can enable students to optimise around this more effectively.
      </p>
    </div>
  </div>
);
