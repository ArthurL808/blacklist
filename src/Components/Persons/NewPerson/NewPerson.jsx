import React, { Component } from "react";
import AddressAutocomplete from "../../AddressAutocomplete";
import DeragatoryMark from "../../DeragatoryMark";
import { addPersonAsync } from "../../../actions";

class NewPerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        first_name: "",
        last_name: "",
        gender_id: 1,
        inches: 0,
        feet: 0,
        weight: 0,
        image: null,
      },
      address: {
        street_number: "",
        route: "",
        locality: "",
        administrative_area_level_1: "",
        country: "",
        postal_code: "",
        apt_number: "",
      },
      deragatoryMark: {
        reason_id: 1,
        on_person: null,
        user_id: null,
        person_role: "defendant",
      },
    };

    this.handlePersonChange = this.handlePersonChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handlePersonChange(event) {
    this.setState({
      ...this.state,
      person: { ...this.state.person, [event.target.name]: event.target.value },
    });
  }

  handleAddressChange(){}

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    // addPersonAsync(this.state);
  }

  render() {
    return (
      <>
        <form>
          <label>
            Name
            <input
              placeholder="First name"
              type="text"
              name="first_name"
              onChange={this.handlePersonChange}
            />
            {/* <label>Last Name</label> */}
            <input
              placeholder="Last name"
              type="text"
              name="last_name"
              onChange={this.handlePersonChange}
            />
          </label>

          <label>
            Gender
            <select name="Gender_id" onChange={this.handlePersonChange}>
              <option value={1}>Male</option>
              <option value={2}>Female</option>
              <option value={3}>Other</option>
            </select>
          </label>

          <label>
            Height
            {/* <label>Feet</label> */}
            <input
              placeholder="Feet"
              name="feet"
              min="0"
              max="9"
              type="number"
              onChange={this.handlePersonChange}
            />
            {/* <label>Inches</label> */}
            <input
              placeholder="Inches"
              name="inches"
              min="0"
              max="11"
              type="number"
              onChange={this.handlePersonChange}
            />
          </label>

          <label>
            Weight
            <input
              placeholder="lbs"
              name="weight"
              min="0"
              type="number"
              onChange={this.handlePersonChange}
            />
          </label>

          <label>
            DoB
            <input
              type="date"
              name="dob"
              id="dob"
              onChange={this.handlePersonChange}
            />
          </label>

          <input type="file" name="image" onChange={this.handlePersonChange} />

          <AddressAutocomplete onChange={this.handleChange} />
          {/* <DeragatoryMark /> */}
        </form>
        <button onClick={this.handleSubmit}>submit</button>
      </>
    );
  }
}

export default NewPerson;
