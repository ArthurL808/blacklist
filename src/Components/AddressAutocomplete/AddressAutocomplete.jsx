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

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   console.log(props)
  //   // if(props.onAddressChange){
  //   //   return props.onAddressChange(e.target.value)
  //   // }
  // };

  const handlePlaceSelect = () => {
    let placeObject = autocomplete.current.getPlace();

    for (const component of placeObject.address_components) {
      const addressType = component.types[0];
      if (addressType in address) {
        const val = component.short_name;
        addressRef.current[addressType] = val;
      }
    }
    if(props.onChange){
      return props.onChange(addressRef.current)
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
      </div>
    </>
  );
};

export default AddressAutocomplete;
