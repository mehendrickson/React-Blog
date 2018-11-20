import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PostList extends Component {
  render() {
    return (
      <p>PostList</p>
    );
  }
}

function mapStateToProps({ auth }){
  return { auth };
}

export default connect(mapStateToProps)(PostList);