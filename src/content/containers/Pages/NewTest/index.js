
import React from 'react';

import Navbar from '../../../../content/components/NewNavbar';
import Form from '../../../../content/components/ContactForm';
import Footer from '../../../../content/components/Footer';

import drawNewPieChart from '../../../../content/scripts/custom/echarts/drawPieChart';


import { renderChartToTarget, redrawCharts } from '../../../../content/scripts/custom/echarts/utilities';
import { fireDebouncedResizeEvents, whenLoaded } from '../../../../content/scripts/custom/utilities';


class NewTest extends React.Component {
  componentDidMount() {
    whenLoaded(() => {
      const data = [
        { name: 'Other', value: 10 },
        { name: 'Unemployed', value: 5 },
        { name: 'Further Study', value: 10 },
        { name: 'Work and further study', value: 5 },
        { name: 'Part-time work', value: 15 },
        { name: 'Full-time work', value: 55 },
      ];

      const options = drawNewPieChart(data, true, 'doghnut', false);

      // listen for resize events
      fireDebouncedResizeEvents();

      // then listen for the events here
      $(document).on('debouncedResizeEvent', () => {
        // and redraw the charts
        redrawCharts();
      });

      // do the salary graph
      renderChartToTarget(
        this.chart1,
        options,
      );

      $('#top-slides').on('slid.bs.carousel', () => {
        redrawCharts();
      });
    });
  }

  render() {
    return (
      <div>

        <div style={{ position: 'relative' }}>
          <div className="background-fix" />
        </div>

        <Navbar
          superContainerClass="navbar navbar-expand-md background-fix"
        />


        <div className="outer">


          <div className="bg-top">
            <span className="span1" />
            <span className="span2" />
            <span className="span3" />
            <span className="span4" />
            <span className="span5" />
          </div>

          <div className="content-top">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-6">
                  <div className="main-text">
                    <h1>Alumni Outcomes Data</h1>
                    <h3>Easy to collect and use for:</h3>
                  </div>

                  <div className="content-top-icons pl-md-5 pt-3">
                    <h6 className="wow fadeIn" data-wow-duration="0.75s" data-wow-delay="0.5s"><i className="fas fa-bullseye" /> TEF Submissions</h6>
                    <h6 className="wow fadeIn" data-wow-duration="0.75s" data-wow-delay="1.0s"><i className="fas fa-bullseye" /> Student Recruitment</h6>
                    <h6 className="wow fadeIn" data-wow-duration="0.75s" data-wow-delay="1.5s"><i className="fas fa-bullseye" /> Widening Participation</h6>
                    <h6 className="wow fadeIn" data-wow-duration="0.75s" data-wow-delay="2.0s"><i className="fas fa-bullseye" /> And much more....</h6>
                  </div>
                </div>
                <div className="col-lg-6">


                  <div className="my-5 my-lg-0">
                    <div className="my-card text-center">


                      <div id="top-slides" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                          <div className="carousel-item active">

                            <div className="text-center" style={{ minHeight: '340px' }}>
                              <h5 className="dark-blue-header-text">Big Data and Joined Up Reporting</h5>
                              <hr />
                              <div
                                ref={(element) => { this.chart1 = element; }}
                                className="echarts-graph"
                                style={{ width: '100%', height: '240px' }}
                              />
                              <h6 className="dark-blue-main-text">Measure overall university impact - not just focused on salary.</h6>
                            </div>

                          </div>
                          <div className="carousel-item">

                            <div className="text-center" style={{ minHeight: '340px' }}>
                              <h5>Beautiful Responsive Surveys</h5>
                              <hr />
                              <br />
                              <img className="img-responsive" src={require('../../../../content/theme/custom/images/survey-placeholder.png')} alt="survey" />
                              <br />
                              <br />
                              <h6>Surveys that give alumni immediate feedback resulting in better response rates, and high graduate participation</h6>
                            </div>

                          </div>
                        </div>
                        <a className="carousel-control-prev" href="#top-slides" role="button" data-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true" />
                          <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#top-slides" role="button" data-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true" />
                          <span className="sr-only">Next</span>
                        </a>
                      </div>


                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container" style={{ marginTop: '-60px' }}>
          <div className="toolkit">

            <div className="text-center dark-blue-header-text">
              <p style={{ fontSize: '26px', lineHeight: '33px' }}>THE COMPLETE TOOLKIT FOR UNIVERSITY DATA</p>
            </div>

            <br /><br />

            <div className="row">

              <div className="col-md-6 mb-5 mb-md-0">
                <div className="my-card box-1" style={{ padding: 0 }}>
                  <div className="row">
                    <div className="col-md-3 d-flex align-items-stretch">
                      <div className="d-flex align-items-center image-corners-what-we-do">
                        <div className="toolkit-mobile-sizing-icons">
                          <img className="img-fluid" alt="logo" src={require('../../../../content/theme/custom/images/front-new/1-s2-n.png')} />
                        </div>
                        <div className="mobile-card-title ml-5">
                          <h5>Teaching Excellence Framework</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="p-4">
                        <div className="card-title">
                          <h5>Teaching Excellence Framework</h5>
                        </div>
                        <p className="dark-blue-main-text">Our survey is designed to give you lifelong employment outcomes to use in your written TEF submission.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="my-card box-2" style={{ padding: 0 }} >
                  <div className="row pb-md-4 pb-lg-0">
                    <div className="col-md-3 d-flex align-items-stretch">
                      <div className="d-flex align-items-center image-corners-what-we-do">
                        <img className="img-fluid" alt="logo" src={require('../../../../content/theme/custom/images/front-new/2-s2-n.png')} />
                      </div>
                      <div className="mobile-card-title mt-5 ml-5">
                        <h5>Understanding Alumni</h5>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="p-4">
                        <div className="card-title">
                          <h5>Understanding Alumni</h5>
                        </div>
                        <p className="dark-blue-main-text pb-lg-4">Build life-long relationships with alumni by giving them something of value they can use.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="m-5" />

            <div className="row">

              <div className="col-md-6 mb-5 mb-md-0">
                <div className="my-card box-3" style={{ padding: 0 }}>
                  <div className="row">
                    <div className="col-md-3 d-flex align-items-stretch">
                      <div className="d-flex align-items-center image-corners-what-we-do">
                        <img className="img-fluid" alt="logo" src={require('../../../../content/theme/custom/images/front-new/3-s2-n.png')} />
                      </div>
                      <div className="mobile-card-title mt-5 ml-5">
                        <h5>Lifelong Value of a Degree</h5>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="p-4">
                        <div className="card-title">
                          <h5>Lifelong Value of a Degree</h5>
                        </div>
                        <p className="dark-blue-main-text">Understand both financial and non-financial value of a degree across a graduate's entire career. </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="my-card box-4" style={{ padding: 0 }}>
                  <div className="row">
                    <div className="col-md-3 d-flex align-items-stretch">
                      <div className="d-flex align-items-center image-corners-what-we-do">
                        <img className="img-fluid" alt="logo" src={require('../../../../content/theme/custom/images/front-new/4-s2-n.png')} />
                      </div>
                      <div className="mobile-card-title mt-5 ml-5">
                        <h5>Student Recruitment</h5>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="p-4">
                        <div className="card-title">
                          <h5>Student Recruitment</h5>
                        </div>
                        <p className="dark-blue-main-text">Get specific marketing messages that will resonate with students, wherever they come from.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>


          </div>
        </div>


        <div className="outer">
          <div className="bg-two" />
          <div className="content-two">

            <div className="container" style={{ paddingTop: '40px' }}>

              <div className="text-center dark-blue-header-text">
                <p style={{ fontSize: '26px', lineHeight: '33px' }}>SURVEY YOUR ALUMNI</p>
                <div style={{ marginTop: '26px' }} />

                <div className="row">
                  <div className="col-sm-2" />
                  <div className="col-sm-8">
                    <p style={{ fontSize: '24px', lineHeight: '36px', fontWeight: '400' }}>
                  Understand Alumni Outcomes and deliver data back to the university, and everyone across the whole student life cycle
                    </p>
                  </div>
                </div>

              </div>

              <div style={{ paddingTop: '34px' }}>
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0.5s">
                      <div className="p-2 cycle-text">
                        <h5 className="dark-blue-header-text">Better Student Recruitment</h5>
                        <p className="dark-blue-main-text">Tailored marketing messages that resonate with individuals improves student recruitment.</p>
                      </div>
                    </div>
                    <div className="wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0.75s">
                      <div className="p-2 cycle-text">
                        <h5 className="dark-blue-header-text">Better Careers Service</h5>
                        <p className="dark-blue-main-text">Show students the full range of career options and how they can fit in to improve employment outcomes.</p>
                      </div>
                    </div>
                    <div className="wow fadeIn" data-wow-duration="0.5s" data-wow-delay="1.0s">
                      <div className="p-2 cycle-text">
                        <h5 className="dark-blue-header-text">Better Alumni Outcomes</h5>
                        <p className="dark-blue-main-text">More students, better equipped for employment will improve graduate outcomes and improve your next survey.</p>
                      </div>
                    </div>

                  </div>

                  <div className="col-lg-6">
                    <div className="survey-arrow">
                      <img className="img-fluid" alt="logo" src={require('../../../../content/theme/custom/images/front-new/circle-new.png')} />
                    </div>
                  </div>
                </div>
              </div>


            </div>

          </div>
        </div>

        <div className="outer">
          <div className="three-box">

            <div className="container">
              <div className="text-center dark-blue-header-text">
                <p style={{ fontSize: '26px', lineHeight: '33px' }}>HOW IT WORKS</p>
              </div>

              <div style={{ paddingTop: '44px' }}>
                <div className="row">
                  <div className="col-md-4">
                    <div className="how-it-works-icons">
                      <i className="fas fa-pencil-alt fa-3x purple-text-two" style={{ marginBottom: '16px' }} />
                      <div className="p-2 cycle-text">
                        <h5 className="dark-blue-header-text">1. Survey Alumni</h5>
                        <p className="dark-blue-main-text">We have built a next-generation survey tool that provides instant feedback to users filling it out.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="how-it-works-icons">
                      <i className="fas fa-database fa-3x purple-text-two" style={{ marginBottom: '16px' }} />
                      <div className="p-2 cycle-text">
                        <h5 className="dark-blue-header-text">2. Analyse The Data</h5>
                        <p className="dark-blue-main-text">Analyse the data in a fully GDPR compliant way either in our tool or in Tableau or other analytics engine.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="how-it-works-icons">
                      <i className="fas fa-chart-line fa-3x purple-text-two" style={{ marginBottom: '16px' }} />
                      <div className="p-2 cycle-text">
                        <h5 className="dark-blue-header-text">3. Use in TEF, Careers Advice and Recruitment</h5>
                        <p className="dark-blue-main-text">Our specific tools and dashboards enable you to quickly deploy insights to immediately improve your institution in multiple ways.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="text-center dark-blue-header-text">
                <div className="row">
                  <div className="col-sm-2" />
                  <div className="col-sm-8">
                    <p style={{
 fontSize: '24px', lineHeight: '36px', fontWeight: '400', paddingTop: '30px',
}}
                    >
                  With our tools you are afforded unparalleled access to data that is further reaching than LEO & DLHE that helps you improve core services and benefits your alumni and current students.
                    </p>
                  </div>
                </div>

              </div>


            </div>

          </div>
        </div>

        <div className="outer">
          <div className="four-box">
            <div className="container">
              <div className="row">

                <div className="offset-md-1 col-lg-4 d-flex align-items-center">
                  <img className="img-fluid img-shadow" id="image" alt="survey" src={require('../../../../content/theme/custom/images/survey.png')} />
                </div>

                {/* Start of column 2 outer */}
                <div className="offset-md-1 col-lg-6">


                  <div className="my-4">
                    <div className="row">
                      <div className="col-sm-2 p-2 d-flex align-items-center">
                        <div className="header-image">
                          <div className="wow bounceIn" data-wow-duration="1s" data-wow-delay="0.75s">
                            <img className="img-fluid" alt="survey" src={require('../../../../content/theme/custom/images/front-new/5-s.png')} />
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-8 text-center text-sm-left">
                        <div className="p-2 cycle-text">
                          <h5 className="dark-blue-header-text" style={{ color: '#2296bc' }}>21st Century Surveying</h5>
                          <p className="dark-blue-main-text">Means surveys that look great and return results immediately to the people who take it.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="my-4">
                    <div className="row">
                      <div className="col-sm-2 d-flex align-items-center">
                        <div className="header-image">
                          <div className="wow bounceIn" data-wow-duration="1s" data-wow-delay="0.95s">
                            <img className="img-fluid" alt="survey" src={require('../../../../content/theme/custom/images/front-new/6-s.png')} />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-8 text-center text-sm-left">
                        <div className="p-2 cycle-text">
                          <h5 className="dark-blue-header-text" style={{ color: '#1673b4' }}>Seed Survey with HEI Data</h5>
                          <p className="dark-blue-main-text">Sharing some data with us can help optimise the survey or allow us to conduct survey for you.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="my-4">
                    <div className="row">
                      <div className="col-sm-2 d-flex align-items-center">
                        <div className="header-image">
                          <div className="wow bounceIn" data-wow-duration="1s" data-wow-delay="1.15s">
                            <img className="img-fluid" alt="survey" src={require('../../../../content/theme/custom/images/front-new/7-s.png')} />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-8 text-center text-sm-left">
                        <div className="p-2 cycle-text">
                          <h5 className="dark-blue-header-text" style={{ color: '#40509d' }}>Survey Only</h5>
                          <p className="dark-blue-main-text">AlumniBase has been designed to run without increasing your GDPR responsibilities at all.</p>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
                {/* end of column 2 outer */}

              </div>
            </div>
          </div>
        </div>


        <div className="outer">
          <div className="five-box">


            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="false">
              <div className="carousel-inner">
                <div className="carousel-item active text-center">
                  <div className="carousel-margin">
                    <img className="img-fluid" alt="logo" width="30%" src={require('../../../../content/theme/custom/images/front-new/8-s.png')} />

                    <div className="p-2 cycle-text">
                      <h5 className="dark-blue-header-text">Teaching Excellence Framework</h5>
                      <p className="dark-blue-main-text">AlumniBase is compatible with the DLHE survey, <br /> meaning TEF quality data for lifetime graduate outcomes.</p>
                    </div>

                  </div>
                </div>
                <div className="carousel-item text-center">
                  <div className="carousel-margin">
                    <img className="img-fluid" alt="logo" width="25%" src={require('../../../../content/theme/custom/images/front-new/9-s.png')} />

                    <div className="p-2 cycle-text">
                      <h5 className="dark-blue-header-text">Student Recruitment</h5>
                      <p className="dark-blue-main-text">Showing applicants how students like them have gone on to succeed <br /> answers much deeper questions when selecting a university.</p>
                    </div>

                  </div>
                </div>
                <div className="carousel-item text-center">
                  <div className="carousel-margin">
                    <img className="img-fluid" alt="logo" width="30%" src={require('../../../../content/theme/custom/images/front-new/10-s.png')} />

                    <div className="p-2 cycle-text">
                      <h5 className="dark-blue-header-text">Employability</h5>
                      <p className="dark-blue-main-text">The insights we return to alumni will help them <br /> maximise their earning potential.</p>
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>


          </div>
        </div>


        <div className="outer">
          <div className="six-box">

            <div className="container">


              <div className="text-center dark-blue-header-text">
                <p style={{ fontSize: '26px', lineHeight: '33px' }}>STILL HAVE QUESTIONS?</p>
              </div>

              <div className="container">
                <div className="row justify-content-center">

                  <div className="col-md-4 order-md-12 my-4">
                    <div className="wow slideInRight" data-wow-duration="0.5s" data-wow-delay="0.75s">
                      <Form />
                    </div>
                  </div>

                  <div className="col-md-4 order-md-1 my-4">
                    <div className="wow slideInLeft" data-wow-duration="0.5s" data-wow-delay="0.25s">
                      <div className="p-2 cycle-text">
                        <h5 className="dark-blue-header-text">Find out about:</h5>
                      </div>

                      <a href="/legal" className="btn btn-green btn-block">GDPR Compliance</a>
                      <a href="/data" className="btn btn-green btn-block">Data Quality</a>
                      <a href="#survey" className="btn btn-green btn-block">Surveying</a>


                    </div>
                  </div>


                </div>
              </div>
            </div>

          </div>
        </div>


        <Footer />
      </div>
    );
  }
}

export default NewTest;
