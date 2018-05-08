import React from 'react';

const Table = () => {
    return (
      <div className="table">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <table className="table table-hover">
              <thead className="thead-light">
                <tr>
                  <th scope="col">DEVELOPMENT AREA</th>
                  <th scope="col" colSpan="2">WHAT IT MEANS</th>
                  <th scope="col" colSpan="2">WHAT WE ARE BUILDING</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Lawful basis of<br />processing</th>
                  <td colSpan="2">
                    <p>You need to have a legal<br />
                    reason to use Ana’s data.<br />
                    That reason could be consent<br />
                    (she opted in) with notice<br />
                    (you told her what she was<br />
                      opting into), performance of<br />
                    a contract (e.g. she’s your<br />
                      customer and you want to<br />
                      send her a bill), or what the<br />
                    GDPR calls “legitimate<br />
                    interest” (e.g. she’s a<br />
                      customer, and you want to<br />
                      send her products related to<br />
                    what she currently has).
                    </p>
                    <p>You need the ability to track<br />
                    that reason (also known as<br />
                      “lawful basis”) for a given<br />
                    contact.
                    </p>
                  </td>
                  <td colSpan="2">
                    <p>
                      We have built the survey to<br />
                      process personal information<br />
                      on the basis of consent, and<br />
                      users express this before<br />
                      after we have clearly<br />
                      explained the survey and we<br />
                      process any personal<br />
                      information.
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Consent</th>
                  <td colSpan="2">
                    <p>One type of lawful basis of<br />
                    processing is consent with<br />
                    proper notice.
                    </p>
                    <p>In order for Ana to grant<br />
                    consent under the GDPR, a<br />
                        few things need to happen:
                    </p>
                    <ul>
                      <li>She needs to be told<br />
                      what she’s opting into. That’s<br />
                      called “notice.”
                      </li>
                      <li>She needs to affirmatively<br />
                      opt-in (pre-checked<br />
                            checkboxes aren’t valid).<br />
                      Her filling out a form alone<br />
                          cannot implicitly opt her into<br />
                          everything your company<br />
                          sends.
                      </li>
                      <li>The consent needs to be<br />
                      granular, meaning it needs to<br />
                      cover the various ways you<br />
                      process and use Ana’s<br />
                      personal data (e.g. marketing<br />
                            email or sales calls). You<br />
                      must log auditable evidence<br />
                      of what Ana consented to,<br />
                      what she was told (notice),<br />
                      and when she consented.
                      </li>
                    </ul>
                  </td>
                  <td colSpan="2">
                    <p>
                      We have built the consent<br />
                      process to explain in plain<br />
                      English how the data will be<br />
                      used, in each specific way.<br />
                      Each one has a tick box. We<br />
                      log all of her consents and<br />
                      the time they were<br />
                      processed.
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Withdrawal of consent<br />(or opt out)</th>
                  <td colSpan="2">
                    <p>Ana needs the ability (as data<br />
                      subject) to see what she’s<br />
                      signed up for, and withdraw<br />
                      her consent (or object to how<br />
                      you’re processing her data)<br />
                      at any time. In other words,<br />
                      withdrawing consent needs<br />
                      to be just as easy as giving it.
                    </p>
                  </td>
                  <td colSpan="2">
                    <p>
                      Anyone who takes part in the<br />
                      survey may return to it and<br />
                      will be able to access a<br />
                      customised “preferences<br />
                      panel”, here each of Ana’s<br />
                      consents are displayed, and<br />
                      Ana has the ability to change<br />
                      them. All this is logged.
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Cookies</th>
                  <td colSpan="2">
                    <p>Ana needs to be given notice<br />
                    that you're using cookies to<br />
                    track her (in language she<br />
                    can understand) and needs to<br />
                    consent to being tracked<br />
                    by cookies.
                    </p>
                    <p>*** We know the ePrivacy<br />
                    Regulation is coming, and<br />
                    that it may have an impact<br />
                    on how cookies are<br />
                    regulated. We’ll adjust our product<br />
                    accordingly.
                    </p>
                  </td>
                  <td colSpan="2">
                    <p>
                      Our language for enabling<br />
                      cookies will reflect<br />
                      affirmative opt-ins and make<br />
                      it possible to show the<br />
                      cookie-consent message in<br />
                      the right language, based on<br />
                      Ana’s location
                    </p>
                    <p><strong>In Progress - Available early<br />May</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Deletion</th>
                  <td colSpan="2">
                    <p>Ana has the right to request<br />
                    that you delete all the<br />
                        personal data you have about<br />
                        her. The GDPR requires the<br />
                        permanent removal of Ana’s<br />
                        contact from your database,<br />
                        including email tracking<br />
                        history, call records, from<br />
                        submissions and more.
                    </p>
                    <p>In many cases, you’ll need to<br />
                    respond to her request within<br />
                    30 days. The right to deletion<br />
                    is not absolute, and can<br />
                    depend on the context of the<br />
                    request, so it doesn’t always<br />
                    apply.
                    </p>
                  </td>
                  <td colSpan="2">
                    <p>
                      We have built the ability to<br />
                      perform a GDPR-compliant<br />
                      permanent delete that Ana<br />
                      can access from her<br />
                      preferences panel.
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Access / Portability</th>
                  <td colSpan="2">
                    <p>Just as she can request that<br />
                    you delete her data, Ana can<br />
                    request access to the<br />
                    personal data you have about<br />
                    her. Personal data is anything<br />
                    identifiable, like her name<br />
                    and email address. If she<br />
                    requests access, you (as the<br />
                    controller) need to provide a<br />
                    copy of the data, in some<br />
                    cases in machine-readable<br />
                    format (e.g. CSV or XLS).
                    </p>
                    <p>Ana can also request to see<br />
                    and verify the lawfulness of<br />
                    processing (see above).
                    </p>
                  </td>
                  <td colSpan="2">
                    <p>
                      We have built the ability for<br />
                      Ana to request a copy of her<br />
                      personal data and the basis<br />
                      upon which we process it.
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Modification</th>
                  <td colSpan="2">
                    <p>
Just as she can request to<br />
delete or access her data,<br />
Ana can ask your company<br />
to modify her personal data<br />
if it’s inaccurate or<br />
incomplete. If and when she<br />
does, you need to be able to<br />
accommodate that<br />
modification request.
                    </p>
                  </td>
                  <td colSpan="2">
                    <p>
                      Ana has the ability to inform<br />
                      us she would like to modify<br />
                      her data, and we will begin<br />
                      the process to make that edit<br />
                      to her contact record.
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Security Measures</th>
                  <td colSpan="2">
                    <p>
The GDPR requires a slew of<br />
data protection safeguards,<br />
from encryption at rest and<br />
in transit to access controls<br />
to data pseudonymization<br />
and anonymization.
                    </p>
                  </td>
                  <td colSpan="2">
                    <p>
                      As part of AlumniBase’s<br />
                      approach to the GDPR,<br />
                      we’re strengthening our<br />
                      security controls across<br />
                      the board.
                    </p>
                    <p>
                      In addition to industry<br />
                      standard practices around<br />
                      encryption, AlumniBase’s<br />
                      infrastructure teams are also<br />
                      improving our systems for<br />
                      authentication, authorization,<br />
                      and auditing at a massive<br />
                      scale to better protect our<br />
                      customer's data.
                      <br />
                      We will provide additional<br />
                      details on these security<br />
                      measures as they are<br />
                      implemented here.
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

export default Table;
