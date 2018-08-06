import React from 'react';
import Helmet from 'react-helmet';

import Navbar from '../../../../content/components/NewNavbar';
import Footer from '../../../../content/components/Footer';

const NotFoundPage = () => (
  <div>
    <Helmet title="404" />
    <Navbar
      altImage
      containerClass="alt-nav"
    />
    <div className="container">
      <div className="row py-5" />
      <div className="row justify-content-center text-center">
        <div className="col-8">
          <h1 className="mb-4" style={{ color: '#0056b3', fontWeight: 'bold' }} >404</h1>
          <h4>We can't seem to find the page your looking for.</h4>
          <div className="my-4" />
          <h5>You might be able to fix this problem with the refresh button in your browser.</h5>
          <hr className="my-5" style={{ width: '200px', backgroundColor: '#0056b3', height: '2px' }} />
          <h4 style={{ color: '#a9a9a9' }}>Let us know what happened</h4>
          <div className="row justify-content-center pt-5">
            <div className="col-4">
              <a href="mailto:hello@alumnibaseapp.com?Subject=Hello" style={{ color: '#0056b3' }}>
                <i className="fal fa-envelope" style={{ fontSize: '35px' }} />
                <p>Email Us</p>
              </a>
            </div>
            <div className="col-4">
              <a href="/meet-me" style={{ color: '#0056b3' }}>
                <i className="fal fa-comments" style={{ fontSize: '35px' }} />
                <p>Chat Now</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row py-4" />
    </div>
    <Footer />
  </div>
);

export default NotFoundPage;
