import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import * as actions from '../../../actions/index';
import Register from "./Register";
import Console from "../Console";

class AdminLanding extends Component {
  state = {showRegister: false};
  renderContent(){
    console.log('Props', this.props);

    if(this.state.showRegister && !this.props.auth){
      return <Register
                adminHistory={this.props.history}
                onRegCancel={() => this.setState({showRegister: false})}
              />
    }
    if(!this.props.auth){
      return <Login
                adminHistory={this.props.history}
                onRegisterClick={() => this.setState({ showRegister: true })}
              />
    }
    if(this.props.auth){
      return <Console />
    }
  }

  render(){
    return(
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps({ auth}){
  return{ auth }
}

export default connect(mapStateToProps, actions)(AdminLanding);