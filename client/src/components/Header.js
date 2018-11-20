import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={ '/' }
            className="brand-logo">
            Blog
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">

          </ul>
        </div>
      </nav>
    );
  }

}

function mapStateToProps({ auth }){
  return { auth };
}

export default connect(mapStateToProps)(Header);