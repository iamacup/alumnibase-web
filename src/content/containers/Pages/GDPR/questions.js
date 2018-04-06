import React from 'react';

class Questions extends React.Component {
  render() {
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
                              Does the GDPR require personal data be stored in the EU? What does AlumniBase do to ensure lawful<br />data transfers from the EU?
                              </div>
                            </div>
                          </button>
                        </h5>
                      </div>
                      <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body">
                          <div className="row justify-content-center">
                            <div className="col-md-10 my-3">
      No. There is no obligation under the GDPR for data to be stored in the EU and the rules regarding transfer of personal data outside the EU remain largely unchanged. The GDPR permits transfers of personal data outside of the EU subject to certain conditions. The EU-U.S. Privacy Shield continues to be one valid way to ensure adequate safeguards are in place for personal data transfer from the EU to the U.S. The EU model clauses also remain a valid mechanism to lawfully transfer personal data.  HubSpot offers a Data Processing Agreement that incorporates the model clauses to our EU/EEA customers. We are also Privacy Shield certified.
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
                   Will AlumniBase be able to comply with the right to erasure (right to be forgotten)?
                              </div>
                            </div>
                          </button>
                        </h5>
                      </div>
                      <div id="collapseFive" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body">
                          <div className="row justify-content-center">
                            <div className="col-md-10 my-3">
                Yes. When one of your contacts (i.e. data subjects) asks you to delete them from your records, you'll have the ability to do so quickly and easily. <br /><br />By May 25th, you'll be able to execute a GDPR-compliant delete, which will remove every trace of the contact from your system, permanently.
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
                              <div className="col-md-2">
                                <i className="far fa-dot-circle" />
                              </div>
                              <div className="col-md-10">
          Will double-opt-in be mandatory?
                              </div>
                            </div>
                          </button>
                        </h5>
                      </div>
                      <div id="collapseSix" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body">
                          <div className="row justify-content-center">
                            <div className="col-md-10 my-3">
        For those unfamiliar with this term, "double-opt-in" is a 2-step mechanism where a person must confirm their email address after initially signing up. The GDPR does not require double-opt in (though certain countries may make this mandatory).<br /><br />
It’s worth noting that subscribers to the HubSpot service may already choose to enable double-opt-in functionality in their portals as an additional protective measure in proving they obtained the required consent.
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
}

export default Questions;
