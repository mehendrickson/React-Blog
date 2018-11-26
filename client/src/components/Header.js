import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent(){
    switch(this.props.auth){
      case null:
        return;
      case false:
        return;
      default:
        return <a href="/auth/logout">Logout</a>
    }
  }

  render() {
    return (
      <nav className="blue-grey">
        <div className="nav-wrapper">
          <Link
            to={ '/' }
            className="brand-logo">
            Blog
          </Link>
          <div className="right">
            {this.renderContent()}
          </div>
        </div>
      </nav>
    );
  }

}

function mapStateToProps({ auth }){
  return { auth };
}

export default connect(mapStateToProps)(Header);