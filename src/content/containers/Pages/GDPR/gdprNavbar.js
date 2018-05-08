import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar sticky navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <div className="mx-auto">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav pull-xs-left">
              <li className="nav-item">
                <a className="nav-link" href="#roadmap">Product Roadmap</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#opportunity">From Obstacle to Opportunity</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
