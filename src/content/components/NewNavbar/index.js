
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

  getLink(location, text) {
    const { pathname } = this.context.router.route.location;

    console.log(pathname);

    const obj = (
      <li className={pathname === location ? 'nav-item active' : 'nav-item'}>
        <Link className="nav-link" to={location} href={location}>{text}</Link>
      </li>
    );

    return obj;
  }

  render() {
    const { containerClass } = this.props;
    let image = (<img className="logo-large" alt="logo" src={require('../../../content/theme/custom/images/large-nav.png')} />);

    if (this.props.altImage === true) {
      image = (<img className="logo-large" alt="logo" src={require('../../../content/theme/custom/images/AB_300px_150ppi.png')} height="75px" />);
    }

    return (
      <nav className="navbar navbar-expand-md">

        <div className={containerClass + ' container py-2 px-lg-5'}>

          <Link className="navbar-brand" href="/" to="/">
            {image}
            <img className="logo-small" alt="logo" src={require('../../../content/theme/custom/images/small-nav.png')} />
          </Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fal fa-bars" />
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              {this.getLink('/about', 'About')}
              {this.getLink('/benefits', 'Benefits')}
              {this.getLink('/data', 'Insights')}
              {this.getLink('/legal', 'Legal & GDPR')}
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

Navbar.propTypes = {
  containerClass: PropTypes.string,
  altImage: PropTypes.bool,
};

Navbar.defaultProps = {
  containerClass: '',
  altImage: false,
};

Navbar.contextTypes = {
  router: PropTypes.object,
};

export default Navbar;
