import React from "react";

const Addresses = ({ ...props }) => {
    
  return (
    <div>
      <p>
        {props.address.street_number} {props.address.street_name}
      </p>
      <p>Apt#: {props.address.apt_number}</p>
      <p>
        {props.address.city}, {props.address.state}
      </p>
      <p>{props.address.zipcode}</p>
    </div>
  );
};

export default Addresses;
