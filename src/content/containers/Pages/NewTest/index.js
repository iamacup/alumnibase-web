
import React from 'react';

import Navbar from '../../../../content/components/NewNavbar';

import drawNewPieChart from '../../../../content/scripts/custom/echarts/drawPieChart';


import { renderChartToTarget, redrawCharts, updateChartOptions } from '../../../../content/scripts/custom/echarts/utilities';
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
        <Navbar />

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
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="main-text">
                    <h1>Alumni Outcomes Data</h1>
                    <h3>Easy to collect and use for:</h3>
                  </div>

                  <div className="pl-5 pt-3">
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

          <div className="text-center dark-blue-header-text">
            <p style={{ fontSize: '26px', lineHeight: '33px' }}>THE COMPLETE TOOLKIT FOR UNIVERSITY DATA</p>
          </div>

          <br /><br />

          <div className="row">

            <div className="col-sm-6">
              <div className="my-card box-1" style={{ padding: 0 }}>
                <div className="row">
                  <div className="col-sm-3 d-flex align-items-stretch">
                    <div className="d-flex align-items-center image-corners-what-we-do">
                      <img className="img-fluid" alt="logo" src={require('../../../../content/theme/custom/images/front-new/1-s2-n.png')} />
                    </div>
                  </div>
                  <div className="col-sm-9">
                    <div className="p-4">
                      <h5>Teaching Excellence Framework</h5>
                      <p className="dark-blue-main-text">Our survey is designed to give you lifelong employment outcomes to use in your written TEF submission.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="my-card box-2" style={{ padding: 0 }}>
                <div className="row">
                  <div className="col-sm-3 d-flex align-items-stretch">
                    <div className="d-flex align-items-center image-corners-what-we-do">
                      <img className="img-fluid" alt="logo" src={require('../../../../content/theme/custom/images/front-new/2-s2-n.png')} />
                    </div>
                  </div>
                  <div className="col-sm-9">
                    <div className="p-4">
                      <h5>Understanding Alumni</h5>
                      <p className="dark-blue-main-text">Build life-long relationships with alumni by giving them something of value they can use.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="m-5" />

          <div className="row">

            <div className="col-sm-6">
              <div className="my-card box-3" style={{ padding: 0 }}>
                <div className="row">
                  <div className="col-sm-3 d-flex align-items-stretch">
                    <div className="d-flex align-items-center image-corners-what-we-do">
                      <img className="img-fluid" alt="logo" src={require('../../../../content/theme/custom/images/front-new/3-s2-n.png')} />
                    </div>
                  </div>
                  <div className="col-sm-9">
                    <div className="p-4">
                      <h5>Lifelong Value of a Degree</h5>
                      <p className="dark-blue-main-text">Understand both financial and non-financial value of a degree across a graduate's entire career. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="my-card box-4" style={{ padding: 0 }}>
                <div className="row">
                  <div className="col-sm-3 d-flex align-items-stretch">
                    <div className="d-flex align-items-center image-corners-what-we-do">
                      <img className="img-fluid" alt="logo" src={require('../../../../content/theme/custom/images/front-new/4-s2-n.png')} />
                    </div>
                  </div>
                  <div className="col-sm-9">
                    <div className="p-4">
                      <h5>Student Recruitment</h5>
                      <p className="dark-blue-main-text">Get specific marketing messages that will resonate with students, wherever they come from.</p>
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

            <div className="container" style={{paddingTop: '40px'}}>

              <div className="text-center dark-blue-header-text">
                <p style={{ fontSize: '26px', lineHeight: '33px' }}>SURVEY YOUR ALUMNI</p>
                <div style={{marginTop: '26px'}} />

                <div className="row">
                <div className="col-sm-2" />
                <div className="col-sm-8">
                <p style={{fontSize: '24px', lineHeight: '36px', fontWeight: '400' }}>
                  Understand Alumni Outcomes and deliver data back to the university, and everyone across the whole student life cycle
                </p>
                </div>
                </div>
                
              </div>

              <div style={{paddingTop: '34px'}}>
              <div className="row align-items-center">
                <div className="col-sm-6">
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

                <div className="col-sm-6">
                  <div className="p-5">
                  <div className="p-5">
                  <img className="img-fluid" alt="logo" src={require('../../../../content/theme/custom/images/front-new/circle-new.png')} />
                  </div>
                  </div>
                </div>
              </div>
              </div>

 


            </div>

          </div>
        </div>

        <div style={{ marginTop: '2000px' }} />
        <h1>Thing</h1>
      </div>
    );
  }
}

export default NewTest;
