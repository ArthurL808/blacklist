import React, { useEffect, useState } from "react";
import axios from "axios";
import DeragatoryMarks from "../../DeragatoryMark";
const PersonMarks = ({ ...props }) => {
  const [marks, setMarks] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/deragatoryMarks/onPerson/${props.onPerson}`)
      .then((res) => {
        setMarks(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      {marks.map((mark) => {
        return (
          <div>
            {mark.createdBy.company_name}
            <DeragatoryMarks mark={mark} />
          </div>
        );
      })}
    </div>
  );
};

export default PersonMarks;
