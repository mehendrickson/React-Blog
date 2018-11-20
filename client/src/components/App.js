import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import SideBar from './SideBar';
import PostList from './PostList';
import Login from './admin/Login';


class App extends Component {

  componentDidMount(){
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/login" component={Login}/>
            <Route exact path="/" component={PostList}/>
          </div>
        </BrowserRouter>
      </div>
    );
  };
}


export default connect(null, actions)(App);