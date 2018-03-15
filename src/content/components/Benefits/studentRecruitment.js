import React from 'react';

class StudentRecruitment extends React.Component {
  render() {
    return (
      <div className="container mb-5 pb-5" id="studentRecruitment" style={{ backgroundColor: '#fff' }}>
        <div className="row justify-content-center">
          <div className="my-5">
            <h3 id="subHeading">Student Recruitment</h3>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="wow fadeIn" data-wow-duration="1.0s" data-wow-delay="0.25s">
            <img className="img-fluid" id="srImage" src={require('../../theme/custom/images/studentRecruitmentBenefits.png')} alt="recruitment" style={{ height: '410px' }} />
          </div>
          <div className="col-lg-6 p-sm-5">
            <h5>
              The narrative around universities has undoubtedly soured over the past year. Tuition fees, maintenance loans and grants have changed dramatically.
            </h5>
            <h5>This has caused a mismatch between the Enlightenment ideals of a university which still dominates the why of attending university, a positive step for individuals to improve themselves, against the commercial narrative that has dominated the 21st century.</h5>

            <h5>As much as we may lament seeing students as “consumers”, it is an important facet to consider and address as the wider issues of “debt”, “loans”, and “fees” dominates the public conversation as students make the decision to attend university.</h5>

            <h5>AlumniBase is designed to give universities the evidence of the value of its degrees across the lifetime outcomes of graduates. Showing students what others like them have gone on to do – the lifetime value of a lifetime product – is essential in producing meaningful marketing messages.
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentRecruitment;
