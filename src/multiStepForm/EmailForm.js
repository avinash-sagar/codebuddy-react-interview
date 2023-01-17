// import React from 'react'

import FormWrapper from './FormWrapper';
import './MultiForm.css';

const EmailForm = ({ emailId, password, updateField }) => (
  <FormWrapper title="Email Account">
    <div className="email_div">
      <label className="labels" htmlFor="email">
        EmailId:
      </label>
      <input
        className="input_field"
        type="email"
        required
        value={emailId}
        pattern="^[^\W_](?:[\w.-]*[^\W_])?@(?:\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.|(?:[\w-]+\.)+)(?:[a-zA-Z]{2,3}|[0-9]{1,3})\]?$"
        onChange={e => updateField({ emailId: e.target.value })}
      />
      <span className="err"> enter a valid email </span>
    </div>

    <div className="email_div">
      <label className="labels" htmlFor="password">
        Password:
      </label>
      <input
        className="input_field"
        type="text"
        required
        pattern="(?=.*\d{2})(?=(?:\w*\W){2})(?=.*[a-z]{2})(?=.*[A-Z]{2}).{8,}"
        value={password}
        onChange={e => updateField({ password: e.target.value })}
      />
      <span className="err">
        password must be 2 uppercae 2 lowercase 2 numbers and 2 special charactor
      </span>
    </div>
  </FormWrapper>
);

export default EmailForm;
