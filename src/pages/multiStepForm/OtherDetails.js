// import React from 'react';

import FormWrapper from './FormWrapper';
import './MultiForm.css';

const OtherDetails = ({ countryCode, phoneNumber, updateField }) => (
  // Regex reg = new Regex(@"^[0-9]{10}$")
  <FormWrapper title="Other Details">
    <div className="email_div">
      <label className="labels" htmlFor="countryCode">
        CountryCode{' '}
      </label>
      <select
        required
        className="input_field"
        value={countryCode}
        onChange={e => updateField({ countryCode: e.target.value })}
      >
        <option value="">Select</option>
        <option value="+91">(+91)India</option>
        <option value="+1">(+1)America</option>
      </select>
      <span className="err"> select country code </span>
    </div>
    <div className="email_div">
      <label className="labels" htmlFor="phoneNumber">
        Phone Number
      </label>
      <input
        className="input_field"
        type="text"
        required
        pattern="(?=.*\d).{10}"
        value={phoneNumber}
        onChange={e => updateField({ phoneNumber: e.target.value })}
      />
      <span className="err">enter 10 digit phone number </span>
    </div>
    <div className="myCheckbox">
      <input type="checkbox" required />
      <label className="labels term_condition" htmlFor="termConditon">
        Accept Terms & Condition
      </label>
    </div>
  </FormWrapper>
);

export default OtherDetails;
