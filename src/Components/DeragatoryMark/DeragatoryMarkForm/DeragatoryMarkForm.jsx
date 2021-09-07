import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const DeragatoryMarkForm = ({ ...props }) => {
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (props.editMode) {
      axios
        .get(`/api/deragatoryMarks/${props.mark.id}`)
        .then((res) => {
          setMark(res.data);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(setLoading(false));
    }
    setLoading(false);
  }, []);

  const handleChange = (e) => {
    if (props.onChange) {
      return props.onChange(e.target.name, e.target.checked);
    }
    setMark({ ...mark, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.editMode) {
      axios.put(`/api/deragatoryMarks/${props.mark.id}`, mark);
    }
    axios.post(`/api/deragatoryMarks/onPerson/${props.on_person}`, mark);
  };

  return (
    <div>
      {loading ? null : (
        <div>
          {props.editMode ? (
            <button
              onClick={() => {
                props.setEditMode(!props.editMode);
              }}
            >
              close
            </button>
          ) : null}

          <div>
            <input
              checked={mark.non_payment}
              onChange={handleChange}
              type="checkbox"
              name="non_payment"
              id="non_payment"
            />
            <label htmlFor="non_payment">Non-Payment</label>
          </div>
          <div>
            <input
              checked={mark.fraud}
              onChange={handleChange}
              type="checkbox"
              name="fraud"
              id="fraud"
            />
            <label htmlFor="fraud">Fruad</label>
          </div>
          <div>
            <input
              checked={mark.skipped_bail}
              onChange={handleChange}
              type="checkbox"
              name="skipped_bail"
              id="skipped_bail"
            />
            <label htmlFor="skipped_bail">Skipped Bail</label>
          </div>
          <div>
            <input
              checked={mark.aggressive}
              onChange={handleChange}
              type="checkbox"
              name="aggressive"
              id="aggressive"
            />
            <label htmlFor="aggressive">Aggressive</label>
          </div>
          <div>
            <input
              checked={mark.hiding_fugitive}
              onChange={handleChange}
              type="checkbox"
              name="hiding_fugitive"
              id="hiding_fugitive"
            />
            <label htmlFor="hiding_fugitive">Hiding Fugitive</label>
          </div>
          <div>
            <input
              checked={mark.non_compliance_with_terms}
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
              checked={mark.no_communication}
              onChange={handleChange}
              type="checkbox"
              name="no_communication"
              id="no_communication"
            />
            <label htmlFor="no_communication">No Communication</label>
          </div>
          <div>
            <input
              checked={mark.other}
              onChange={handleChange}
              type="checkbox"
              name="other"
              id="other"
            />
            <label htmlFor="other">Other</label>
          </div>
          {props.onChange ? null : (
            <button onClick={handleSubmit}>submit</button>
          )}
        </div>
      )}
    </div>
  );
};

export default DeragatoryMarkForm;
