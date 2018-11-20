import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SideBar extends Component {
  render() {
    return (
      <h2>SideBar</h2>
    );
  }
}

function mapStateToProps({ auth }){
  return { auth };
}

export default connect(mapStateToProps)(SideBar);