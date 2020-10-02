import React, { useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import { addPersonAsync } from "../../actions";

const AddressAutocomplete = ({ person }) => {
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState(null);
  const [aptNumber, setAptNumber] = useState("");
  const [reason, setReason] = useState(null);
  const [personRole, setPersonRole] = useState("");

  const handleSelect = async (value) => {
    setAddress(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    function getFormData(object) {
      const formData = new FormData();
      Object.keys(object).forEach((key) => formData.append(key, object[key]));

      return formData;
    }
    const data = getFormData(person);
    const fullAddress = {
      address: address,
      zipcode: zipcode,
      aptNumber: aptNumber,
    };
    const deragatoryMark = {
      reason_id: reason,
      person_role: personRole
    }
    addPersonAsync(data, fullAddress,deragatoryMark);
  };

  return (
    <>
    <h2>Address</h2>
    <form onSubmit={handleSubmit}>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
          return (
            <div>
              <input {...getInputProps({ placeholder: "Type Address" })} />
              <div>
                {loading ? <div>...loading</div> : null}
                <div className="autocomplete-dropdown">
                  {suggestions.map((suggestion) => {
                    const style = {
                      backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                    };
                    return (
                      <div {...getSuggestionItemProps(suggestion, { style })}>
                        {suggestion.description}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        }}
      </PlacesAutocomplete>
      <label>Apt#</label>
      <input type="text" onChange={setAptNumber} name="aptNumber" />
      <label>Zipcode</label>
      <input
        type="number"
        min="0"
        max="99999"
        onChange={setZipcode}
        name="zipcode"
      />

        <h2>Deragatory Marks</h2>
      <select name="reason_id" onChange={setReason}>
        <option value={1}>Non-Payment</option>
        <option value={2}>Fraud</option>
        <option value={3}>Skipped Bail</option>
        <option value={4}>No Communication</option>
        <option value={5}>Aggressive</option>
        <option value={6}>Hidding Fugitive</option>
        <option value={7}>Non-Compliance W/Terms</option>
        <option value={8}>Other</option>
      </select>

      <select onChange={setPersonRole} name="personRole">
        <option value="defendant">Defendant</option>
        <option value="cosigner">Cosigner</option>
      </select>

      <input type="submit" value="Submit" />
    </form>
    </>
  );
};

export default AddressAutocomplete;
