import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import SideBar from './SideBar';
import PostList from './PostList';
import AdminLanding from './admin/accounts/AdminLanding';
import Register from './admin/accounts/Register';

class App extends Component {

  componentDidMount(){
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <div className="row">
              <div className="col s3">
                <SideBar />
              </div>
              <div className="col s9">
                <Route path="/console" component={AdminLanding}/>
                <Route exact path="/" component={PostList}/>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  };
}


export default connect(null, actions)(App);