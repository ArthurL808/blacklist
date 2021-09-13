import React from "react";

const Associates = ({ ...props }) => {
  return (
    <div>
      <p>
        Name: {props.associate.last_name}, {props.associate.first_name}
      </p>
      <p>Nickname: {props.associate.nickname}</p>
      <p>Relationship: {props.associate.relationship}</p>
    </div>
  );
};

export default Associates
