import React from 'react';

export default  ({ input, label, type, meta: {error, touched} }) => {
  return (
    <div className="row">
      <div className="input-field col s8 offset-s2">
        <input {...input} type={type} style={{marginBottom: '5px'}} />
        <label htmlFor={input.name}>{label}</label>
      </div>
      <div className="col s8 offset-s2 red-text" style={{marginBottom: '20px'}}>
        {touched && error}
      </div>
    </div>
  );
}