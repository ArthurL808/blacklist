import React, { useState } from "react";

const DeragatoryMark = ({...props}) => {
  const [deragatoryMark, setDeragatoryMark] = useState({
    reason_id: 1,
    on_person: null,
    user_id: null,
    person_role: "defendant",
  });

  const handleChange = (e) => {
    e.preventDefault();
    props.onMarkChange(e.target.value)
  };

  return (
    <div>
      <h1>Deragatory Marks</h1>
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
          <label>Defendant</label>
          <input
            type="radio"
            name="person_role"
            id="defendant"
            value="defendant"
          />
        </div>
        <div>
          <label>Cosigner</label>
          <input
            type="radio"
            name="person_role"
            id="cosigner"
            value="cosigner"
          />
        </div>
    </div>
  );
};

export default DeragatoryMark;
