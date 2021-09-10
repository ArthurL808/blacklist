import React from "react";
import moment from "moment";
const Persons = ({ ...props }) => {
  return (
    <div>
      <img src={props.person.image_url} alt="client" />
      <h3>
        {props.person.last_name},{props.person.first_name}
      </h3>
      <p>Gender: {props.person.gender.gender}</p>
      <p>DoB: {moment(props.person.dob).format("MMM DD, YYYY")}</p>
      <p>Height: {props.person.height}</p>
      <p>Weight: {props.person.weight}</p>
    </div>
  );
};

export default Persons;
