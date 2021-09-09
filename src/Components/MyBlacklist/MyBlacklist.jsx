import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadMyBlacklist } from "../../actions";
import DeragatoryMarks from "../DeragatoryMark";
import Hunts from "../Huntboard/Hunts";
import Styles from "./MyBlacklist.module.scss";

const MyBlacklist = ({ ...props }) => {
  const user = useSelector((state) => state.user);
  const deragatoryMarks = useSelector((state) => state.deragatoryMarks);
  const hunts = useSelector((state) => state.hunts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMyBlacklist());
    console.log(hunts)
  }, []);

  return (
    <div>
      <h1>My Blacklist Component</h1>
      <h2>{user.company_name}</h2>
      {deragatoryMarks.map((mark) => {
        return (
          <div className={Styles.marksContainer} key={mark.id}>
            <h5>
              {mark.onPerson.last_name},{mark.onPerson.first_name}
            </h5>
            <DeragatoryMarks mark={mark} />
          </div>
        );
      })}

      <Hunts hunts={hunts} />
    </div>
  );
};

export default MyBlacklist;
