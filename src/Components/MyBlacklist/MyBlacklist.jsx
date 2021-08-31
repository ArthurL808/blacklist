import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadMyBlacklist } from "../../actions";
// import EditDeragatoryMarks from "./EditDeragatoryMarks";
import DeragatoryMarks from "../DeragatoryMark";
const MyBlacklist = ({ ...props }) => {
  const user = useSelector((state) => state.user);
  const deragatoryMarks = useSelector((state) => state.deragatoryMarks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMyBlacklist());
  }, []);

  return (
    <div>
      <h1>My Blacklist Component</h1>
      <h2>{user.company_name}</h2>
      {deragatoryMarks.map((mark) => {
        return (
          <div key={mark.id}>
            <h5>
              {mark.onPerson.last_name},{mark.onPerson.first_name}
            </h5>
            <DeragatoryMarks mark={mark} />
          </div>
        );
      })}
    </div>
  );
};

export default MyBlacklist;
