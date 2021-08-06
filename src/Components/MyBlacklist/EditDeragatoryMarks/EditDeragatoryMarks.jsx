import React, { useEffect, useState } from "react";
import axios from "axios";
const EditDeragatoryMarks = ({ ...props }) => {
  const [editMark, setEditMark] = useState(false);
  const [mark, setMark] = useState({
    onPerson: [],
  });
  useEffect(() => {
    axios
      .get(`/api/deragatoryMarks/${props.markId}`)
      .then((results) => {
        setMark(results.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      <h5>
        {mark.onPerson.last_name},{mark.onPerson.first_name}
      </h5>
      <form>
        {/* <label htmlFor="non_payment">Non-payment</label>
        <input
          type="checkbox"
          name="non_payment"
          id="non_payment"
          checked={mark.non_payment}
        /> */}
      </form>
    </div>
  );
};

export default EditDeragatoryMarks;
