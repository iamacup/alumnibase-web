
import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../../../content/components/ContactForm';

export default () => (
  <div className="footer">
    <div className="container">
      <div className="row justify-content-around">

        <div className="col-md">
          <div className="my-4">
            <img alt="logo" src={require('../../../content/theme/custom/images/AB_white_300px_150ppi.png')} width="250" height="auto" />
          </div>
        </div>

        <div id="navigation" className="col">
          <div className="mt-4">
            <h5>Alumni Base</h5>
            <Link to="/about" href="/about">About Us</Link><br />
            <Link to="/benefits" href="/benefits">Benefits</Link><br />
            <Link to="/data" href="/data">Data Insights</Link><br />
            <Link to="/legal" href="/legal">Compliance & Legal</Link>
          </div>
        </div>

        <div id="legals" className="col">
          <div className="mt-4">
            <h5>Legal</h5>
            <Link to="/GDPR" href="/GDPR">GDPR</Link>
          </div>
        </div>

        <div id="contact" className="col">
          <div className="mt-4">
            <h5>Email</h5>
            <i style={{ marginRight: '10px' }} className="far fa-envelope" />
            <a href="mailto:hello@alumnibaseapp.com?Subject=Hello">hello@alumnibaseapp.com</a><br />
          </div>
        </div>

      </div>
      <div className="row justify-content-center">
        <div className="col-md">

          <Form />
        </div>
        <div id="copyright" className="col-md text-right">
          <div className="mt-4" style={{ color: '#696969' }}>
            <p>Copyright © 2017-2018, Sliips ltd.</p>
            <p>All rights reserved. Various trademarks held by their respective owners.</p>
          </div>
        </div>

      </div>
    </div>
  </div>
);

