import React from 'react';

class Table extends React.Component {
  render() {
    return (
      <div className="table">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <table className="table table-hover">
              <thead className="thead-light">
                <tr>
                  <th scope="col" />
                  <th scope="col">WHAT IT MEANS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Lawful basis of processing</th>
                  <td>
                    <p>You need to have a legal reason to use Ana’s data. <br />
                      That reason could be consent (she opted in) with <br />
                      notice (you told her what she was opting into), <br />
                      performance of a contract (e.g. she’s your customer<br />
                      and you want to send her a bill), or what the GDPR<br />
                      calls “legitimate interest” (e.g. she’s a customer,<br />
                      and you want to send her products related to what<br />
                      she currently has).
                    </p>
                    <p>You need the ability to track that reason (also known<br />
                      as “lawful basis”) for a given contact.
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Consent</th>
                  <td>
                    <p>One type of lawful basis of processing is consent<br />
                      with proper notice.
                    </p>
                    <p>In order for Ana to grant consent under the GDPR,<br />
                        a few things need to happen:
                    </p>
                    <ul>
                      <li>She needs to be told what she’s opting into.<br />
                          That’s called “notice.”
                      </li>
                      <li>She needs to affirmatively opt-in (pre-checked<br />
                            checkboxes aren’t valid). Her filling out a form<br />
                          alone cannot implicitly opt her into everything<br />
                          your company sends.
                      </li>
                      <li>The consent needs to be granular, meaning it<br />
                          needs to cover the various ways you process<br />
                          and use Ana’s personal data (e.g. marketing<br />
                            email or sales calls). You must log auditable<br />
                          evidence of what Ana consented to, what she<br />
                          was told (notice), and when she consented.
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Withdrawal of consent (or opt out)</th>
                  <td colSpan="2">
                    <p>Ana needs the ability (as data subject) to see what she’s<br />
                      signed up for, and withdraw her consent (or object to<br />
                        how you’re processing her data) at any time. In other<br />
                      words, withdrawing consent needs to be just as easy as<br />
                      giving it.
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Cookies</th>
                  <td colSpan="2">
                    <p>Ana needs to be given notice that you're using cookies<br />
                        to track her (in language she can understand) and needs<br />
                        to consent to being tracked by cookies.
                    </p>
                    <p>*** We know the ePrivacy Regulation is coming, and that<br />
                        it may have an impact on how cookies are regulated. <br />
                        We’ll adjust our product accordingly.
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Deletion</th>
                  <td colSpan="2">
                    <p>Ana has the right to request that you delete all the<br />
                        personal data you have about her. The GDPR requires<br />
                        the permanent removal of Ana’s contact from your<br />
                        database, including email tracking history, call records,<br />
                        form submissions and more.
                    </p>
                    <p>In many cases, you’ll need to respond to her request<br />
                        within 30 days. The right to deletion is not absolute, and<br />
                        can depend on the context of the request, so it doesn’t<br />
                        always apply.
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Access / Portability</th>
                  <td colSpan="2">
                    <p>Just as she can request that you delete her data, Ana<br />
                        can request access to the personal data you have about her. <br />
                        Personal data is anything identifiable, like her name and<br />
                        email address. If she requests access, you (as the controller)<br />
                        need to provide a copy of the data, in some cases in <br />
                        machine-readable format (e.g. CSV or XLS).
                    </p>
                    <p>Ana can also request to see and verify the lawfulness of<br />
                        processing (see above).
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Modification</th>
                  <td colSpan="2">
                    <p>
Just as she can request to delete or access her data, Ana can<br />
ask your company to modify her personal data if it’s inaccurate<br />
or incomplete. If and when she does, you need to be able to<br />
accommodate that modification request.
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Security Measures</th>
                  <td colSpan="2">
                    <p>
The GDPR requires a slew of data protection safeguards, from<br />
encryption at rest and in transit to access controls to data<br />
pseudonymization and anonymization.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
