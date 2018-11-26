import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import * as actions from '../../../actions/index';
import StyledFullWidthField from "./formComponents/StyledFullWidthField";
import loginFields from "./loginFields";
import { withRouter } from 'react-router-dom';

class Login extends Component {

  renderError(state){
    console.log(state);
    if(state != null && state.loginFailed != null && state.loginFailed){
      return (
        <h4 className="red-text">Login failed, loser.</h4>
      );
    }
  }

  renderFields(){
    return _.map(loginFields, ({label, name, type}) => {
      return <Field key={name} component={StyledFullWidthField} type={type} label={label} name={name} />
    })
  }

  render() {

    const { loginUser, adminHistory, handleSubmit } = this.props;
    console.log('Props',this.props);
    return(
      <div className="container card-panel blue-grey lighten-5">
        <div className="row">
          <div className="col s4 offset-s2">
            <h3>Login.</h3>
          </div>
          <div className="col s4">
            { this.renderError(adminHistory.location.state) }
          </div>
        </div>
        <div className="row" >
          <form className="col s12" onSubmit={handleSubmit(loginUser)}>
            {this.renderFields()}
            <div className="row">
              <div className="col s8 offset-s2">
                <button type="button" onClick={this.props.onRegisterClick} className="red btn-flat white-text">Register</button>
                <button type="submit" className="teal btn-flat right white-text">Login</button>
              </div>
            </div>
          </form>

        </div>
      </div>
    );
  };
}

function validate({username, password}){
  const errors = {};
  if(!username){
    errors.username = "You have to have a username to login.";
  }
  if(!password){
    errors.password = "Letting you in without a password wouldn't be very secure, would it?";
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'loginForm'
})(
  connect(null, actions )(Login)
);