import React from 'react';

class opportunity extends React.Component {
  componentDidMount() {
    console.log('LandingPage mounted');
  }

  render() {
    return (
      <div className="opportunity" id="opportunity">
        <div className="opportunity-landing">
          <div className="row justify-content-center pt-3">
            <img src={require('../../theme/custom/images/Logo_deconstructed.png')} alt="Logo_deconstructed" height="75" />
          </div>
          <div className="row justify-content-center pt-3">
            <h2>Turning the GDPR from an Obstacle into an Opportunity</h2>
          </div>
          <div className="row justify-content-center pt-3 pb-5">
            <h6>Here's how we think about the GDPR</h6>
          </div>
        </div>
        <div clasName="container">
          <div className="text-box">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <p>Now that we've gotten product specifics out of the way, a quick word on our mindset towards the GDPR, as marketers.</p>
                <p>When a new set of rules is first introduced, our first reaction is often fear. Fear of compliance, of punishment, of red tape.</p>
                <p>But here’s the thing: all of the recent data protection laws, from CAN-SPAM to CASL to the GDPR and beyond, are built for a simple reason: <strong>to provide better experiences for our customers and the people who trust us with their data.</strong></p>
                <p>In that way, they’re perfectly aligned with the concept of Inbound. Be relevant, be helpful, be transparent, and you’ll be on your way to compliance. Be spammy, interruptive, aggressive, and you’ll be in trouble.</p>
                <p>Complying with the GDPR will require effort, and that effort may lead to stress between now and deadline day. But, at the end of the day, if the GDPR makes your customers’ lives better, it’ll grow your business as a result.</p>
                <p>Here are a few big business benefits to think about, as you work through the process over the next few months:</p>
                <ul>
                  <li><strong>The GDPR has specific rules about enabling your contacts to specify exactly what they want to receive from you.</strong>This makes total sense from a business perspective. Don’t send to contacts that don’t want to hear from you, and make sure the ones that do get to choose what they want. Tangibly, this will lead to fewer unsubscribes and better deliverability.</li>
                  <li><strong>The GDPR requires increased transparency around data collection and processing.</strong> In legal language, that’s the “right to access” and “portability,” which mean your contacts can demand a copy of their data in a common format. In other words, your contacts should be able to ask you what they’re signed up for, and receive a quick, accurate, and easy-to-digest answer. When it comes down to it, not so crazy, right? Transparency breeds trust, plain and simple.</li>
                  <li><strong>The GDPR requires that you give your contacts the “right to be forgotten.”</strong> They can request that you delete them from your database. Not only will that satisfy the specific contact in question; it’ll ensure that you’re not wasting your time trying to market and sell to people that have no interest in your product or service. That means more time to focus on your best prospects and customers.</li>
                  <li><strong>Perhaps most importantly, the GDPR requires lawful basis for processing.</strong> In other words, you need a legal reason to use a contact’s data, like consent or legitimate interest. That’s bad news if you’re purchasing lists as it’s not permitted under the GDPR. That may sound painful in the short term, but it’s good news for your company in the long run. Think about it. Who’s more likely to buy from you: a set of email addresses scraped off the internet who may or may not have ever heard of you, or a set of engaged contacts already interested in your product or service? We’ll take our chances with option two. Making sure you have established a lawful basis will lead to a more engaged list, better email deliverability, and fewer annoyed contacts.</li>
                </ul>
                <p>For many companies --- AlumniBase included --- GDPR compliance is stressful and work-heavy. But, as you work through those long hours reading through the GDPR and building out your process, don’t forget the purpose behind the law: to provide better, more secure, more transparent experiences for our customers.</p>
                <p><strong>When your customers win, you win too.</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default opportunity;

