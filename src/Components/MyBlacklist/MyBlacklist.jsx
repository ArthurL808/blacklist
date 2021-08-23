import React, { useEffect, useState } from "react";
import axios from "axios";
// import EditDeragatoryMarks from "./EditDeragatoryMarks";
import DeragatoryMarks from "../DeragatoryMark";
const MyBlacklist = ({ ...props }) => {
  let userId = props.match.params.id;

  const [user, setUser] = useState({
    marks: [],
    hunts: [],
  });

  useEffect(() => {
    axios
      .get('/api/users/myBlacklist')
      .then((res) => {
        return setUser(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1>My Blacklist Component</h1>
      <h2>{user.company_name}</h2>
      {user.marks.map((mark) => {
        return <DeragatoryMarks key={mark.id} mark={mark} />;
      })}
    </div>
  );
};

export default MyBlacklist;
