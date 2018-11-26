import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SideBar extends Component {
  render() {
    return (
      <div className="flex blue-grey lighten-2">

      </div>
    );
  }
}

function mapStateToProps({ auth }){
  return { auth };
}

export default connect(mapStateToProps)(SideBar);