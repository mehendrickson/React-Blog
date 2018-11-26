import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import * as actions from '../../../actions/index';
import StyledFullWidthField from "./formComponents/StyledFullWidthField";
import StyledHalfWidthField from "./formComponents/StyledHalfWidthField";
import userFields from "./userFields";

class Register extends Component {

  renderError(state){

    if(state != null && state.registrationFailed != null && state.resErrCode != null && state.registrationFailed){
        if(state.resErrCode === 400){
          return (
            <h4 className="red-text" style={{margin: '20px 50px 20px 50px', textAlign: 'center'}}>Username exists</h4>
          );
        }

      return (
        <h4 className="red-text" style={{margin: '20px 50px 20px 50px', textAlign: 'center'}}>Registration failed</h4>
      );
    }
  }
  renderHalfField({label, name, type}){
    return <Field key={name} component={StyledHalfWidthField} type={type} label={label} name={name} />
  }
  renderFields(){
    return _.map(userFields, ({label, name, type}) => {
      if(name === 'first' || name === 'last'){
        return;
      }
      return <Field key={name} component={StyledFullWidthField} type={type} label={label} name={name} />
    })
  }

  render() {

    const { registerUser, adminHistory, handleSubmit } = this.props;
    return(
      <div className="container card-panel blue-grey lighten-5">
        <div className="row">
          <div className="col s4 offset-s2">
            <h3>Register.</h3>
          </div>
          <div className="col s4">
            { this.renderError(adminHistory.location.state) }
          </div>
        </div>
        <div className="row" >
          <form className="col s12" onSubmit={handleSubmit(registerUser)}>
            <div className="row">
              {this.renderHalfField(userFields[2])}
              {this.renderHalfField(userFields[3])}
            </div>
            {this.renderFields()}
            <div className="row">
              <div className="col s8 offset-s2">
                <button type="button" onClick={this.props.onRegCancel} className="red btn-flat white-text">Cancel</button>
                <button type="submit" className="teal btn-flat right white-text">Register</button>
              </div>
            </div>
          </form>

        </div>
      </div>
    );
  };
}

function validate({username, password}, props){
  const errors = {};
  console.log(props, username);
  if(!username){
    errors.username = "You think you're cool enough for an empty username?";
  }
  if(!password){
    errors.password = "Obviously you can't register with a blank password.";
  }
  return errors;
}


export default reduxForm({
  validate,
  form: 'registerForm'
})(
  connect(null, actions )(Register)
);