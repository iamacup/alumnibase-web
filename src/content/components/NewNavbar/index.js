
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import { whenLoaded } from '../../../content/scripts/custom/utilities';

class Navbar extends React.Component {
  // componentDidMount() {
  // whenLoaded(() => {
  //   $(document).scroll(() => {
  //     const $nav = $('.navbar');
  //     $nav.toggleClass('scrolled', $(document).scrollTop() > $nav.height());
  //   });
  // });
  // }

  getLink(location, text, style) {
    const { pathname } = this.context.router.route.location;

    const obj = (
      <li className={pathname === location ? 'nav-item active' : 'nav-item'}>
        <Link className="nav-link" to={location} href={location} style={style}>{text}</Link>
      </li>
    );

    return obj;
  }

  render() {
    const style = { color: '' };
    let image = (<img className="logo-large" alt="logo" src={require('../../../content/theme/custom/images/large-nav.png')} />);
    // eslint-disable-next-line react/prop-types
    if (this.props.color) {
      style.color = this.props.color;
      image = (<img className="logo-large" alt="logo" src={require('../../../content/theme/custom/images/AB_300px_150ppi.png')} height="75px" />);
    }


    return (
      <nav className="navbar navbar-expand-md">

        <div className="container py-2 px-md-5">

          <a className="navbar-brand" href="#">
            {image}
            <img className="logo-small" alt="logo" src={require('../../../content/theme/custom/images/small-nav.png')} />
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fal fa-bars" />
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              {this.getLink('/about', 'About', style)}
              {this.getLink('/benefits', 'Benefits', style)}
              {this.getLink('/data', 'Insights', style)}
              {this.getLink('/legal', 'Legal & GDPR', style)}
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link btn btn-green" href="#contact">CONTACT</a>
              </li>
            </ul>
          </div>

        </div>

      </nav>
    );
  }
}

Navbar.contextTypes = {
  router: PropTypes.object,
};

export default Navbar;
