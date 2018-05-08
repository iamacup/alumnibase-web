import React from 'react';

const Questions = () => {
    return (
      <div className="faq-questions">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div id="accordion">

                <div className="row mb-3">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <div className="row text-left">
                              <div className="col-md-1">
                                <i className="far fa-dot-circle" />
                              </div>
                              <div className="col-md-10">
                              Does the HE Provider need to share personal data with AlumniBase?
                              </div>
                            </div>
                          </button>
                        </h5>
                      </div>
                      <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body">
                          <div className="row justify-content-center">
                            <div className="col-md-10 my-3">
     No. AlumniBase works without the need to transfer any personal data from the provider.
                              <br />
As a data controller, it is possible to do so in order to optimise the survey.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="row mb-3">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                            <div className="row text-left">
                              <div className="col-md-1">
                                <i className="far fa-dot-circle" />
                              </div>
                              <div className="col-md-10">
                  Does the data AlumniBase provides increase our Data Protection responsibilities?
                              </div>
                            </div>
                          </button>
                        </h5>
                      </div>
                      <div id="collapseFive" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body">
                          <div className="row justify-content-center">
                            <div className="col-md-10 my-3">
               No. The data we provide is anonymised and aggregated so that it can’t identify an individual. This means it no longer counts as Personal Data and doesn’t come under GDPR.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="row mb-3">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
                            <div className="row text-left">
                              <div className="col-md-1">
                                <i className="far fa-dot-circle" />
                              </div>
                              <div className="col-md-10">
        How does AlumniBase protect the data of alumni who fill in the survey?
                              </div>
                            </div>
                          </button>
                        </h5>
                      </div>
                      <div id="collapseSix" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body">
                          <div className="row justify-content-center">
                            <div className="col-md-10 my-3">
        From a data security perspective, we employ industry best practice to ensure all data is isolated and accessed only when permissioned properly and correctly.
                              <br />
                              <br />
We also use <a href="https://www.ncsc.gov.uk/blog-post/web-check-helping-you-secure-your-public-sector-websites">National Cyber Security Centre Web Check</a> to continually monitor the health of our services.
                              <br />
                              <br />
Finally we empower users as part of the GDPR requirements by giving users a permissions dashboard where they are able to manage their opt-ins on an ongoing basis.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Questions;
