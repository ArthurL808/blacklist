import React, { Component } from "react";
import AddressAutocomplete from "../../AddressAutocomplete";
import AddDeragatoryMark from "../../DeragatoryMark/AddDeragatoryMarks";
import axios from "axios";

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
        on_person: null,
      },
      deragatoryMark: {
        non_payment: false,
        fraud: false,
        skipped_bail: false,
        aggressive: false,
        hiding_fugitive: false,
        non_compliance_with_terms: false,
        no_communication: false,
        other: false,
        on_person: null,
        user_id: null,
      },
    };

    this.handlePersonChange = this.handlePersonChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleMarkChange = this.handleMarkChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePersonChange(event) {
    this.setState({
      ...this.state,
      person: { ...this.state.person, [event.target.name]: event.target.value },
    });
  }

  handleAddressChange(address) {
    this.setState({
      ...this.state,
      address: address,
    });
  }

  handleMarkChange(name, value) {
    this.setState({
      ...this.state,
      deragatoryMark: { ...this.state.deragatoryMark, [name]: value },
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      const results = await axios.post("/api/persons", this.state.person);
      const personId = results.data.id;
      this.setState({
        ...this.state,
        address: { ...this.state.address, on_person: personId },
      });
      this.setState({
        ...this.state,
        deragatoryMark: { ...this.state.deragatoryMark, on_person: personId },
      });
      await axios.post("/api/addresses", this.state.address);
      await axios.post("/api/deragatoryMarks", this.state.deragatoryMark);
    } catch (error) {
      console.error(error);
    }
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
            <select name="gender_id" onChange={this.handlePersonChange}>
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

          <AddressAutocomplete onAddressChange={this.handleAddressChange} />
          <AddDeragatoryMark mark={this.state.deragatoryMark}  onMarkChange={this.handleMarkChange} />
        </form>
        <button onClick={this.handleSubmit}>submit</button>
      </>
    );
  }
}

export default NewPerson;
