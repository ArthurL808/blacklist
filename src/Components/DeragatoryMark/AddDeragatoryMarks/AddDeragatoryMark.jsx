import React, { useState } from "react";
import axios from "axios";

const AddDeragatoryMark = ({ ...props }) => {
  const [mark, setMark] = useState({
    non_payment: false,
    fraud: false,
    skipped_bail: false,
    aggressive: false,
    hiding_fugitive: false,
    non_compliance_with_terms: false,
    no_communication: false,
    other: false,
  });
  const handleChange = (e) => {
    if (props.onMarkChange) {
      return props.onMarkChange(e.target.name, e.target.checked);
    }
    setMark({ ...mark, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`/api/deragatoryMarks/onPerson/${props.on_person}`, mark);
  };

  return (
    <div>
      {props.addMark ? (
        <button
          onClick={() => {
            props.setAddMark(!props.addMark);
          }}
        >
          close
        </button>
      ) : null}
      <div>
        <input
          onChange={handleChange}
          type="checkbox"
          name="non_payment"
          id="non_payment"
        />
        <label htmlFor="non_payment">Non-Payment</label>
      </div>
      <div>
        <input
          onChange={handleChange}
          type="checkbox"
          name="fraud"
          id="fraud"
        />
        <label htmlFor="fraud">Fruad</label>
      </div>
      <div>
        <input
          onChange={handleChange}
          type="checkbox"
          name="skipped_bail"
          id="skipped_bail"
        />
        <label htmlFor="skipped_bail">Skipped Bail</label>
      </div>
      <div>
        <input
          onChange={handleChange}
          type="checkbox"
          name="aggressive"
          id="aggressive"
        />
        <label htmlFor="aggressive">Aggressive</label>
      </div>
      <div>
        <input
          onChange={handleChange}
          type="checkbox"
          name="hiding_fugitive"
          id="hiding_fugitive"
        />
        <label htmlFor="hiding_fugitive">Hiding Fugitive</label>
      </div>
      <div>
        <input
          onChange={handleChange}
          type="checkbox"
          name="non_compliance_with_terms"
          id="non_compliance_with_terms"
        />
        <label htmlFor="non_compliance_with_terms">
          Non-Compliance W/Terms
        </label>
      </div>
      <div>
        <input
          onChange={handleChange}
          type="checkbox"
          name="no_communication"
          id="no_communication"
        />
        <label htmlFor="no_communication">No Communication</label>
      </div>
      <div>
        <input
          onChange={handleChange}
          type="checkbox"
          name="other"
          id="other"
        />
        <label htmlFor="other">Other</label>
      </div>
      {props.onMarkChange ? null : (
        <button onClick={handleSubmit}>submit</button>
      )}
    </div>
  );
};

export default AddDeragatoryMark;
