import React from "react";
import Styles from "./DeragatoryMarks.module.scss";

const DeragatoryMarks = ({ ...props }) => {
  return (
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
  );
};

export default DeragatoryMarks;
