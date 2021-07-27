import React, { useEffect, useState } from "react";
import axios from "axios";

const DeragatoryMarks = ({ ...props }) => {
  const [marks, setMarks] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/deragatoryMarks/onPerson/${props.on_person}`)
      .then((results) => {
        setMarks(results.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td></td>
            <th>Non-payment</th>
            <th>Fraud</th>
            <th>Skipped Bail</th>
            <th>Aggressive</th>
            <th>Hiding Fugitive</th>
            <th>Non-Compliance w/Terms</th>
            <th>No Communication</th>
            <th>Other</th>
          </tr>
        </thead>
        <tbody>
          {marks.map((mark) => {
            return (
              <tr key={mark.createdBy.id}>
                {props.addMark ? (
                  <button
                    onClick={() => {
                      props.setAddMark()
                    }}
                  >
                    close
                  </button>
                ) : null}
                <th>{mark.createdBy.company_name}</th>
                <td>
                  <input
                    type="checkbox"
                    name="non_payment"
                    checked={mark.non_payment}
                  />
                </td>
                <td>
                  <input type="checkbox" name="fraud" checked={mark.fraud} />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="skipped_bail"
                    checked={mark.skipped_bail}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="aggressive"
                    checked={mark.aggressive}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="hiding_fugitive"
                    checked={mark.hiding_fugitive}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="non_compliance_with_terms"
                    checked={mark.non_compliance_with_terms}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="no_communication"
                    checked={mark.no_communication}
                  />
                </td>
                <td>
                  <input type="checkbox" name="other" checked={mark.other} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DeragatoryMarks;
