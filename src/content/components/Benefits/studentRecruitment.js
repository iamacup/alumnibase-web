import React from 'react';

class StudentRecruitment extends React.Component {
  render() {
    return (
      <div className="container mb-5 pt-5" id="student" style={{ backgroundColor: '#fff' }}>
        <div className="row justify-content-center">
          <div className="mt-5">
            <h3 id="subHeading">Student Recruitment</h3>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="wow fadeIn" data-wow-duration="0.75s" data-wow-delay="0.25s">
            <img className="img-fluid" id="srImage" src={require('../../theme/custom/images/studentRecruitmentBenefits.png')} alt="recruitment" style={{ height: '410px' }} />
            <figcaption className="ml-5"><a href="https://www.hesa.ac.uk/news/29-06-2017/sfr245-destinations-of-leavers">Source - Hesa</a></figcaption>
          </div>
          <div className="col-lg-6 p-sm-5">
            <p>
              The narrative around universities has undoubtedly soured over the past year. Tuition fees, maintenance loans and grants have changed dramatically.
            </p>
            <p>This has caused a mismatch between the Enlightenment ideals of a university which still dominates the why of attending university, a positive step for individuals to improve themselves, against the commercial narrative that has dominated the 21st century.</p>

            <p>As much as we may lament seeing students as “consumers”, it is an important facet to consider and address as the wider issues of “debt”, “loans”, and “fees” dominates the public conversation as students make the decision to attend university.</p>

            <p>AlumniBase is designed to give universities the evidence of the value of its degrees across the lifetime outcomes of graduates. Showing students what others like them have gone on to do – the lifetime value of a lifetime product – is essential in producing meaningful marketing messages.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentRecruitment;
