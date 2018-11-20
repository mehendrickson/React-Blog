import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

class Login extends Component {

  renderError(state){
    console.log(state);
    if(state != null && state.loginFailed != null && state.loginFailed){
      return (
        <div>Login failed, loser.</div>
      );
    }
  }

  render() {

    const { loginUser, history, handleSubmit } = this.props;
    console.log(history);
    return(
      <div>
        { this.renderError(history.location.state) }
        <form onSubmit={handleSubmit(loginUser)}>
          <label >Username: </label>
          <Field name="username" type="text" component="input" />
          <label>Password: </label>
          <Field name="password" type="password" component="input" />
          <button type="submit">Login.</button>
        </form>
      </div>
    );
  };
}

function validate(values){
  const errors = {};

  return errors;
}

function mapStateToProps(state){
  return{ loginFailed: state.loginFailed }
}

export default reduxForm({
  validate,
  form: 'loginForm'
})(
  connect(mapStateToProps, actions )(Login)
);