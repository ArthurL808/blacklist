import React, { useState } from "react";
import { useSelector } from "react-redux";
import Styles from "./DeragatoryMarks.module.scss";
import DeragatoryMarkForm from "./DeragatoryMarkForm/DeragatoryMarkForm";

const DeragatoryMarks = ({ ...props }) => {
  const user = useSelector((state) => state.user);
  const [editMode, setEditMode] = useState(false);
  return (
    <div>
      {editMode ? (
        <DeragatoryMarkForm
          setEditMode={setEditMode}
          editMode={editMode}
          mark={props.mark}
        />
      ) : (
        <div className={Styles.markRow}>
          <div className={Styles.cell}>
            <label htmlFor="non_payment">Non Payment</label>
            <br />
            {props.mark.non_payment ? (
              <span className={Styles.checked} role="img" aria-label={"redX"}>
                &#10060;
              </span>
            ) : (
              <span></span>
            )}
          </div>
          <div className={Styles.cell}>
            <label htmlFor="fraud">fraud</label>
            <br />
            {props.mark.fraud ? (
              <span role="img" aria-label={"redX"}>
                &#10060;
              </span>
            ) : (
              <span></span>
            )}
          </div>
          <div className={Styles.cell}>
            <label htmlFor="skipped_bail">Skipped Bail</label>
            <br />
            {props.mark.skipped_bail ? (
              <span role="img" aria-label={"redX"}>
                &#10060;
              </span>
            ) : (
              <span></span>
            )}
          </div>
          <div className={Styles.cell}>
            <label htmlFor="aggressive">Aggressive</label>
            <br />
            {props.mark.aggressive ? (
              <span role="img" aria-label={"redX"}>
                &#10060;
              </span>
            ) : (
              <span></span>
            )}
          </div>
          <div className={Styles.cell}>
            <label htmlFor="hiding_fugitive">Hiding Fugitive</label>
            <br />
            {props.mark.hiding_fugitive ? (
              <span role="img" aria-label={"redX"}>
                &#10060;
              </span>
            ) : (
              <span></span>
            )}
          </div>
          <div className={Styles.cell}>
            <label htmlFor="non_compliance_with_terms">
              Non Compliance with Terms
            </label>
            <br />
            {props.mark.non_compliance_with_terms ? (
              <span role="img" aria-label={"redX"}>
                &#10060;
              </span>
            ) : (
              <span></span>
            )}
          </div>
          <div className={Styles.cell}>
            <label htmlFor="no_communication">No Communication</label>
            <br />
            {props.mark.no_communication ? (
              <span role="img" aria-label={"redX"}>
                &#10060;
              </span>
            ) : (
              <span></span>
            )}
          </div>
          {user.id === props.mark.user_id ? (
            <button
              onClick={() => {
                setEditMode(!editMode);
              }}
            >
              Edit
            </button>
          ) : null}

          {/* {props.addMark ? (
                  <button
                    onClick={() => {
                      props.setAddMark()
                    }}
                  >
                    close
                  </button>
                ) : null} */}
        </div>
      )}
    </div>
  );
};

export default DeragatoryMarks;
