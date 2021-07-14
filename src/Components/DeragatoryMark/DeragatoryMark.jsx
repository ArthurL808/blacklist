import React, { useState } from "react";

const DeragatoryMark = ({ ...props }) => {
  
  const handleChange = (e) => {
    e.preventDefault();
    if (props.onMarkChange) {
      return props.onMarkChange(e.target.name, e.target.value);
    }
  };

  return (
    <div>
      <select name="reason_id" id="reasons" onChange={handleChange}>
        <option value="1">Non-payment</option>
        <option value="2">Fraud</option>
        <option value="3">Skipped Bail</option>
        <option value="4">No Communitcation</option>
        <option value="5">Aggressive</option>
        <option value="6">Hiding fugitive</option>
        <option value="7">Non-Compliacne w/Terms</option>
        <option value="8">Other</option>
      </select>
      <div>
        <select name="person_role" id="person_role" onChange={handleChange}>
          <option value="defendant">Defendant</option>
          <option value="cosigner">Cosigner</option>
        </select>
      </div>
    </div>
  );
};

export default DeragatoryMark;
