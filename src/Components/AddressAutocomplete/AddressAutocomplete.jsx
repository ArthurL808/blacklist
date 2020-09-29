import React, { useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";

const AddressAutocomplete = () => {
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState(null);
  const [aptNumber, setAptNumber] = useState("");

  const handleSelect = async (value) => {
    console.log(value);
    setAddress(value);
  };

  const handleChange = (event) => {
    switch (event.target.name) {
      case "zipcode":
        setZipcode(event.target.value);
        break;
      case "aptNumber":
        setAptNumber(event.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
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
      <input type="text" onChange={handleChange} name="aptNumber" />
      <label>Zipcode</label>
      <input
        type="number"
        min="0"
        max="99999"
        onChange={handleChange}
        name="zipcode"
      />
    </div>
  );
};

export default AddressAutocomplete;
