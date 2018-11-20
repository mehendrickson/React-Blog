import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import SideBar from './SideBar';
import PostList from './PostList';


class App extends Component {

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <SideBar />
            <Route exact path="/" component={PostList}/>
          </div>
        </BrowserRouter>
      </div>
    );
  };
}


export default connect(null, actions)(App);