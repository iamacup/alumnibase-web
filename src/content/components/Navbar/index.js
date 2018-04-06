
import React from 'react';

class About extends React.Component {
  componentDidMount() {
    /*
    $(() => {
      $(document).scroll(() => {
        const $nav = $('.navbar');
        $nav.toggleClass('scrolled', $(document).scrollTop() > $nav.height());
      });
    }); */
  }

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/"><img alt="logo" src={require('../../../content/theme/custom/images/AB_150px_150ppi.png')} /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item">
              <a className="nav-link" href="/about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/benefits">Benefits</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/data">Data Insights</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/legal">Compliance & Legal</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" style={{ color: '#0050bd' }}>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}


export default About;
