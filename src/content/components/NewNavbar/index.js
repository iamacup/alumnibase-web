
import React from 'react';

import { whenLoaded } from '../../../content/scripts/custom/utilities';

class About extends React.Component {
  componentDidMount() {
    whenLoaded(() => {
      $(document).scroll(() => {
        const $nav = $('.navbar');
        $nav.toggleClass('scrolled', $(document).scrollTop() > $nav.height());
      });
    });
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Navbar</a>
        </nav>
      </div>
    );
  }
}


export default About;
