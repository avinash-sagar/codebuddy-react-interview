// import React from 'react'

import FormWrapper from './FormWrapper';
import './MultiForm.css';

const UserForm = ({ firstName, lastName, address, updateField }) => (
  <FormWrapper title="User Name">
    <div className="email_div">
      <label className="labels" htmlFor="fistName">
        First Name:
      </label>
      <input
        className="input_field"
        type="text"
        value={firstName}
        required
        pattern="^[A-Za-z0-9]{3,20}$"
        onChange={e => updateField({ firstName: e.target.value })}
      />
      <span className="err">Name is required</span>
    </div>
    <div className="email_div">
      <label className="labels" htmlFor="lastName">
        Last Name:
      </label>
      <input
        className="input_field"
        type="text"
        required
        value={lastName}
        pattern="^[A-Za-z0-9]{3,20}$"
        onChange={e => updateField({ lastName: e.target.value })}
      />
      <span className="err">Last name is required</span>
    </div>
    <div className="email_div">
      <label className="labels" htmlFor="address">
        Address:
      </label>
      <textarea
        className="input_field"
        type="text"
        value={address}
        required
        pattern="^[A-Za-z0-9]{10,100}$"
        onChange={e => updateField({ address: e.target.value })}
      />
      <span className="err">Address is required</span>
    </div>
  </FormWrapper>
);

export default UserForm;
