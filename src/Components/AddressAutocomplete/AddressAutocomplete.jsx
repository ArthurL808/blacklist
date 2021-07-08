import React, { useState, useEffect, useRef } from "react";


const AddressAutocomplete = ({ ...props }) => {
  const [address, setAddress] = useState({
    street_number: "",
    route: "",
    locality: "",
    administrative_area_level_1: "",
    country: "",
    postal_code: "",
    apt_number: "",
  });

  const addressRef = useRef({
    street_number: "",
    route: "",
    locality: "",
    administrative_area_level_1: "",
    country: "",
    postal_code: "",
    apt_number: "",
  });

  const autocomplete = useRef(null);

  useEffect(() => {
    autocomplete.current = new window.google.maps.places.Autocomplete(
      document.getElementById("autocomplete"),
      { types: ["geocode"] }
    );
    autocomplete.current.setFields(["address_component"]);
    autocomplete.current.addListener("place_changed", handlePlaceSelect);
  });

  const handleChange = (e) => {
    e.preventDefault();
    if(props.onChange){
      return props.onChange(e.target.value)
    }
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handlePlaceSelect = () => {
    let placeObject = autocomplete.current.getPlace();

    for (const component of placeObject.address_components) {
      const addressType = component.types[0];
      if (addressType in address) {
        const val = component.short_name;
        addressRef.current[addressType] = val;
      }
    }
    setAddress(addressRef.current);
  };

  const geolocate = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        const circle = new window.google.maps.Circle({
          center: geolocation,
          radius: position.coords.accuracy,
        });
        autocomplete.current.setBounds(circle.getBounds());
      });
    }
  };

  return (
    <>
      <div>
          <input
            id="autocomplete"
            type="text"
            placeholder={"Enter Your Address"}
            onFocus={geolocate()}
          />

          <input
            type="text"
            id="street_number"
            name={"street_number"}
            value={address.street_number}
            placeholder="Street Number"
            onChange={handleChange}
          />

          <input
            type="text"
            id="route"
            name={"route"}
            value={address.route}
            placeholder="Street Name"
            onChange={handleChange}
          />

          <input
            type="text"
            id="apt_number"
            name={"apt_number"}
            value={address.apt_number}
            placeholder="Apartment number"
            onChange={handleChange}
          />

          <input
            type="text"
            id="locality"
            name={"locality"}
            value={address.locality}
            placeholder="City"
            onChange={handleChange}
          />

          <input
            type="text"
            id="administrative_area_level_1"
            name={"administrative_area_level_1"}
            value={address.administrative_area_level_1}
            placeholder="State"
            onChange={handleChange}
          />

          <input
            type="text"
            id="country"
            name={"country"}
            value={address.country}
            placeholder="Country"
            onChange={handleChange}
          />

          <input
            type="text"
            id="postal_code"
            name={"postal_code"}
            value={address.postal_code}
            placeholder="Zipcode"
            onChange={handleChange}
          />
      </div>
    </>
  );
};

export default AddressAutocomplete;
