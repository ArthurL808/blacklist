import React from "react";

const Hunts = ({ ...props }) => {
  console.log(props);
  return (
    <div>
      <h2>Hunts</h2>
      {props.hunts.map((hunt) => {
        return (
          <div>
            <img src={hunt.person.img_url} alt="client" />
            <h4>
              {hunt.person.first_name} {hunt.person.last_name}
            </h4>
            <h5>DoB: {hunt.person.dob}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default Hunts;
