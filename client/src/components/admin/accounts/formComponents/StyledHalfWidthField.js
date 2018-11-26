import React from 'react';

export default  ({ input, label, type, meta: {error, touched} }) => {
  if(input.name === 'first'){
    return (
      <div>
        <div className="input-field col s4 offset-s2">
          <input {...input} type={type} style={{marginBottom: '5px'}} />
          <label htmlFor={input.name}>{label}</label>
        </div>
      </div>
    );
  }
  else {
    return (
      <div>
      <div className="input-field col s4">
        <input {...input} type={type} style={{marginBottom: '5px'}} />
        <label htmlFor={input.name}>{label}</label>
      </div>
      </div>
    );
  }

}