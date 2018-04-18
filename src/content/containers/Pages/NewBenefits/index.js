import React from 'react';
import Navbar from '../../../../content/components/NewNavbar';
import Footer from '../../../../content/components/Footer';

import drawPieChart from '../../../../content/scripts/custom/echarts/drawPieChart';
import drawBarChart from '../../../../content/scripts/custom/echarts/drawBarChart';
import drawLineChart from '../../../../content/scripts/custom/echarts/drawLineChart';

import { renderChartToTarget, redrawCharts } from '../../../../content/scripts/custom/echarts/utilities';
import { fireDebouncedResizeEvents, whenLoaded } from '../../../../content/scripts/custom/utilities';


class Benefits extends React.Component {
  componentDidMount() {
    whenLoaded(() => {
      const data = [
        { name: 'I would have reconsidered applying', value: 39 },
        { name: 'I would still have applied', value: 38 },
        { name: 'I would not have applied', value: 12 },
        { name: 'Don\'t know', value: 11 },
      ];

      const data2 = [
        { name: 'Professional', data: [21000, 22000, 18000, 20000, 20000, 18000, 22000, 18500, 23000, 22000, 22000, 26000, 24000, 25000, 22000, 21000, 28000, 19500, 22000, 30000] },
        { name: 'Non-professional', data: [16000, 15000, 15500, 16000, 16000, 16000, 17500, 16500, 16000, 16000, 16500, 16500, 16000, 16500, 16000, 17000, 0, 15500, 16000, 0] },
      ];
      const titles = ['Combined', 'Education', 'Creative arts & Design', 'Historical & Philisophical Studies', 'Languages', '*', 'Business & administrative studies', 'Law', 'Social studies', 'TOTAL -Science subject areas', 'Architecture, building & planning', 'Engineering & technology', 'Computer science', 'Mathematical sciences', 'Physical sciences', 'Agriculture & related subjects', 'Veterinary science', 'Biological sciences', 'Subjects allied to medicine', 'Medicine & dentistry'];
      const obj = { direction: 'horizontal', value: '£' };

      const data4 = [{ name: '', data: [8, 6, 17, 30, 18, 16, 15] }];
      const titles2 = ['£20m and over', '£10m to £20m', '£5m to £10m', '£1m to £5m', '£500k to £1m', '£100k to £500k', 'Less than £100k'];
      const obj2 = { direction: 'horizontal', value: '' };

      const data3 = {
        name: ['IBM', 'Accenture', 'EY', 'Deloitte', 'KPMG', 'PA Consulting'],
        plotted: [
          [31000, 31000, 37000, 37000, 46000, 46000, 61000, 61000, 61000, 92000, 92000, 92000, 92000],
          [36000, 36000, 50000, 50000, 50000, 73000, 73000, 73000, 73000, 123000, 123000, 123000, 123000],
          [33000, 33000, 33000, 50000, 50000, 50000, 72000, 72000, 72000, 92000, 92000, 92000, 140000],
          [35000, 35000, 42000, 42000, 54000, 54000, 54000, 54000, 77000, 77000, 77000, 77000, 108000],
          [33000, 33000, 31350, 52000, 52000, 52000, 74000, 74000, 74000, 95000, 95000, 95000, 95000],
          [34500, 34500, 42000, 42000, 52000, 52000, 52000, 68000, 68000, 98500, 98500, 98500, 98500]],
        age: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      };

      const lineOptions = {
        value: false,
        x: 'Years Experience',
      };

      const options1 = drawPieChart(data, true, 'doghnut', false);
      const options2 = drawBarChart(titles, data2, obj, true);
      const options3 = drawLineChart(data3, lineOptions);
      const options4 = drawBarChart(titles2, data4, obj2);

      // listen for resize events
      fireDebouncedResizeEvents();

      // then listen for the events here
      $(document).on('debouncedResizeEvent', () => {
        // and redraw the charts
        redrawCharts();
      });

      renderChartToTarget(
        this.chart1,
        options1,
      );

      renderChartToTarget(
        this.chart2,
        options2,
      );

      renderChartToTarget(
        this.chart3,
        options3,
      );

      renderChartToTarget(
        this.chart4,
        options4,
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
        <div className="benefits-page">

          <div className="benefits-header">
            <div className="benefits-background">
              <div className="stripe s0" />
              <div className="stripe s1" />
              <div className="stripe s2" />
              <div className="stripe s3" />
              <div className="stripe s4" />
              <div className="stripe s5" />
              <div className="stripe s6" />
            </div>
          </div>
          <div className="benefits-content-top">
            <div className="container">
              <div className="main-text text-center">
                <h1>Why Alumni Base?</h1>
              </div>
              <div className="row">
                <div className="col-md-6 mt-sm-5 pt-sm-5">
                  <div className="main-text" id="main-text">
                    <h3>For us, a lifetime of possibilities means a lifetime of outcomes.</h3>
                    <h6>Alumni Base delivers financial and non-financial insights over the full career of your graduates.</h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="top-navigation" style={{ width: '300px' }}>
                    <a id="button" className="btn btn-block mr-2" href="#TEF" role="button">Teaching Excellence Framework</a>
                    <a id="button" className="btn btn-block mr-2" href="#widening" role="button">Widening Participation</a>
                    <a id="button" className="btn btn-block mr-2" href="#student" role="button">Student Recruitment</a>
                    <a id="button" className="btn btn-block mr-2" href="#careers" role="button">Careers</a>
                    <a id="button" className="btn btn-block" href="#alumniRelations" role="button">Alumni Outreach</a>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="container" id="TEF">
            <div className="tef-container">
              <div className="row justify-content-center mb-5">
                <div className="text-center dark-blue-header-text">
                  <p style={{ fontSize: '26px', lineHeight: '33px' }}>TEACHING EXCELLENCE FRAMEWORK</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="cycle-text">
                    <p className="dark-blue-main-text" style={{ textAlign: 'center' }}>If your university had been given a <strong>Bronze</strong> rating when you applied, would it have affected your decision to apply?</p>
                  </div>
                  <div
                    ref={(element) => { this.chart1 = element; }}
                    className="echarts-graph"
                    style={{ width: '100%', height: '240px' }}
                  />
                </div>
                <div className="col-md-6">
                  <div className="text-box py-5">
                    <div className="cycle-text">
                      <h5 className="dark-blue-header-text">Did You Know?</h5>
                      <p className="dark-blue-main-text">6% of students, 10% of UK-domiciled<br />black and minority ethnic (BME)<br />students would reconsider applying<br />to a gold institution.</p>
                    </div>
                  </div>
                </div>
                <hr style={{ width: '900px' }} />
              </div>
              <div className="row justify-content-center mt-5">
                <div className="col-lg-4 m-4 m-md-0">
                  <div className="cycle-text">
                    <p className="dark-blue-main-text">Since TEF2, the Department for Education has <a href="https://www.gov.uk/government/uploads/system/uploads/attachment_data/file/651157/DfE_TEF_Year_2_Lessons_Learned-report.pdf" style={{ color: '#6772e5' }}> published</a> lessons learned, including the decision to halve weighting of the NSS, effectively doubling the importance of employment outcomes data and evidencing this when compiling and submitting the provider submission.  </p>
                  </div>
                </div>
                <div className="col-lg-4 m-4 m-md-0">
                  <div className="cycle-text">
                    <p className="dark-blue-main-text">AlumniBase picks up where the DLHE leaves off. We believe a six (or 15) month snapshot is useful but that really understanding a lifetime of outcomes requires lifelong measurement of outcomes. Earnings, learning impact and the value of a degree change as people reach new and more demanding career and life goals. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="participation-container" id="widening">
            <div className="container">
              <div className="row justify-content-center">
                <div className="title">
                  <div className="text-center dark-blue-header-text">
                    <p style={{ fontSize: '26px', lineHeight: '33px' }}>WIDENING PARTICIPATION</p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mb-4 m-4 m-md-0">
                {/* } <div className="cycle-text col-10"> */}
                <p style={{ fontSize: '24px', lineHeight: '36px', fontWeight: '400' }}>Everyone with the potential and ambition to succeed in, and because of, higher education should have equal opportunity to do so, whatever their income or background. For us, data is the key to making that happen.</p>
              </div>
              <div className="row justify-content-center text-center">
                <div className="dark-blue-header-text col-md-auto">
                  <p style={{ fontSize: '24px', lineHeight: '36px', fontWeight: '400' }}>29%</p>
                  <p className="dark-blue-header-text">Of all entrants<br />were BME students.</p>
                </div>
                <div className="dark-blue-header-text col-md-auto">
                  <p style={{ fontSize: '24px', lineHeight: '36px', fontWeight: '400' }}>56%</p>
                  <p className="dark-blue-header-text">Of full time first<br />degree students are women.</p>
                </div>
                <div className="dark-blue-header-text col-md-auto">
                  <p style={{ fontSize: '24px', lineHeight: '36px', fontWeight: '400' }}>11.3%</p>
                  <p className="dark-blue-header-text">Mature students<br />leave after year one.</p>
                </div>
                <div className="dark-blue-header-text col-md-auto">
                  <p style={{ fontSize: '24px', lineHeight: '36px', fontWeight: '400' }}>220%</p>
                  <p className="dark-blue-header-text">More students<br />with a known mental<br />health condition since 2010-11.</p>
                </div>
                <div className="dark-blue-header-text col-md-auto">
                  <p style={{ fontSize: '24px', lineHeight: '36px', fontWeight: '400' }}>4.6%</p>
                  <p className="dark-blue-header-text">Increase in students<br />from POLAR quintile 1.</p>
                </div>
              </div>
              <div className="row justify-content-end">
                <p className="infoSource text-muted" style={{ fontSize: '10px' }}>Source: <a href="http://www.hefce.ac.uk/analysis/HEinEngland/students/" style={{ color: '#6772e5' }}>hefce</a></p>
              </div>
              <div className="row justify-content-center">
                <div className="col-10 col-md-8">
                  <div className="cycle-text mb-4">
                    <p className="dark-blue-main-text">Tracking lifetime alumni outcomes and being able to show breakdowns across these key participation metrics can arm universities with the information they need to tailor widening participation efforts for maximum impact.</p>
                  </div>
                  <div className="cycle-text">
                    <p className="dark-blue-main-text">These lifelong stories are exactly the evidence individuals need to hear to help them make the decision to go to the university that is right for them; knowing that people who share their background or situation went to university, fitted in and went on to have successful careers are the kind of success stories individuals need to hear to help them make their choice about going to university.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="benefits-header">
            <div className="recruitment-background">
              <div className="stripe s1" /> {/* white left stripe */}
              <div className="stripe s2" /> {/* purple right stripe */}
              <div className="stripe s3" /> {/* bottom blue stripe */}
            </div>
          </div>

          <div className="recruitment-container" id="student">
            <div className="container">
              <div className="row justify-content-center">

                <div className="col-lg-6">
                  <div className="text-center dark-blue-header-text py-5">
                    <p style={{ fontSize: '26px', lineHeight: '33px', color: '#fff' }}>STUDENT RECRUITMENT</p>
                  </div>
                  <div className="cycle-text mx-3 mx-md-0">
                    <p className="dark-blue-main-text" style={{ color: '#9cdbff' }}>The narrative around universities has undoubtedly soured over the past year. Tuition fees, maintenance loans and grants have changed dramatically.</p>
                    <p className="dark-blue-main-text" style={{ color: '#9cdbff' }}>This has caused a mismatch between the Enlightenment ideals of a university which still dominates the why of attending university, a positive step for individuals to improve themselves, against the commercial narrative that has dominated the 21st century.</p>
                    <p className="dark-blue-main-text" style={{ color: '#9cdbff' }}>As much as we may lament seeing students as “consumers”, it is an important facet to consider and address as the wider issues of “debt”, “loans”, and “fees” dominates the public conversation as students make the decision to attend university.</p>
                    <p className="dark-blue-main-text" style={{ color: '#9cdbff' }}>AlumniBase is designed to give universities the evidence of the value of its degrees across the lifetime outcomes of graduates. Showing students what others like them have gone on to do – the lifetime value of a lifetime product – is essential in producing meaningful marketing messages.</p>
                  </div>
                </div>

                <div className="col-lg-6 mt-5">
                  <div
                    ref={(element) => { this.chart2 = element; }}
                    className="echarts-graph mt-5"
                    style={{ width: '100%', height: '450px' }}
                  />
                  <p style={{ color: '#c4f0ff', fontSize: '12px', marginLeft: '100px' }}> * Mass communication & documentation</p>
                  <div className="row justify-content-end">
                    <div className="chart2-title col-10">
                      <p style={{ color: '#9cdbff', fontSize: '15px', lineHeight: '20px' }}>Median salary of UK-domiciled full-time leavers who obtained first degree qualifications and entered full-time paid work in the UK by subject area and professional/non-professional marker 2015/2016.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <br />
            <br />
            <hr style={{ backgroundColor: '#343469', width: '50%', height: '5px' }} />
          </div>

          <div className="careers-container" id="careers">
            <div className="container">
              <div className="row justify-content-center mb-5">
                <div className="text-center dark-blue-header-text">
                  <p style={{ fontSize: '26px', lineHeight: '33px', color: '#fff' }}>CAREERS</p>
                </div>
              </div>
              <div className="row justify-content-center mx-2 mx-md-0">
                <p style={{
 fontSize: '24px', lineHeight: '36px', fontWeight: '400', color: '#c4f0ff',
}}
                >At <a href="https://www.sliips.com/" style={{ color: '#fff' }}>Sliips.com</a> our service was designed to help graduates understand career paths after their initial grad scheme, how they can ensure they’re paid fairly and how to maximise their earning potential.
                </p>
              </div>
              <div className="row justify-content-center mx-3 p-md-5 p-md-2">
                <div className="cycle-text">
                  <p className="dark-blue-main-text" style={{ color: '#9cdbff' }}>Based on user feedback, being able to show career paths and salaries based on real payslips meant that our users were more confident about negotiating salaries each year, thereby increasing their career lifetime earnings.</p>
                  <p className="dark-blue-main-text" style={{ color: '#9cdbff' }}>What we also found was that people did not know that completing a certain degree still meant they could find ways into high earning industries with the right experience. </p>
                  <p className="dark-blue-main-text" style={{ color: '#9cdbff' }}>We believe delivering this information to students while they are still at university and in the crucial first few years of graduating can enable students to optimise around this more effectively.
                  </p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-10">
                  <div className="business-chart mt-5 mt-md-5 pb-2">
                    <div className="cycle-text">
                      <h5 className="text-center dark-blue-header-text">Career Progression at Top Consulting Companies</h5>
                    </div>
                    <div
                      ref={(element) => { this.chart3 = element; }}
                      className="echarts-graph"
                      style={{ width: '100%', height: '240px' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="outreach-container" id="alumniRelations">
            <div className="container">
              <div className="row justify-content-center mb-5">
                <div className="text-center dark-blue-header-text">
                  <p style={{ fontSize: '26px', lineHeight: '33px' }}>ALUMNI OUTREACH</p>
                </div>
              </div>
              <div className="row justify-content-center mb-5">
                <div className="col-lg-6">
                  <div className="cycle-text">
                    <p className="dark-blue-main-text mx-3 mx-md-0">Size matters for alumni relations teams, particularly when trying to build a community with alumni that results in them donating their time, experience and of course, funds to their alma mater.</p>
                  </div>
                  <div
                    ref={(element) => { this.chart4 = element; }}
                    className="echarts-graph"
                    style={{ width: '100%', height: '340px' }}
                  />
                  <p className="chart4-source text-muted" style={{ fontSize: '10px' }}>Source: <a href="http://www.case.org/Documents/Research/Ross-CASE/Ross_CASE_UK_2017_v5.pdf" style={{ color: '#6772e5' }}>The Guardian</a></p>

                </div>
                <div className="col-lg-6">
                  <div className="cycle-text">
                    <p className="dark-blue-main-text mx-3 mx-md-0">AlumniBase is designed to help your alumni relations teams work smarter with available resources. Big data, though anonymised, can help identify which fundraising campaigns may be most successful with particular sub-groups of graduates. Further, a strong relationship is based on a two-way flow of value.</p>
                  </div>
                  <div className="card">
                    <div className="cycle-text">
                      <ul className="list-group list-group-flush">
                        <p className="list-group-item dark-blue-main-text">Average number of fundraising staff is 6</p>
                        <p className="list-group-item dark-blue-main-text">Oxford and Cambridge combined total is 366</p>
                        <p className="list-group-item dark-blue-main-text">More than half of lower performing departments were formed before 2004</p>
                        <p className="list-group-item dark-blue-main-text">Four / 16 best performing fundraisers not part of the Russel Group</p>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mb-5">
                <div className="cycle-text">
                  <p className="dark-blue-main-text mx-3 mx-md-0">AlumniBase returns insights that alumni can use to maximise their earning potential, while also providing an opportunity for alumni to start developing the habit of ‘giving back’, first with their data which all alumni are in a position to give.</p>
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

export default Benefits;
