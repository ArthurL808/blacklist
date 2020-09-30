import React, { Component } from "react";
import AddressAutocomplete from "../../AddressAutocomplete";

class NewPerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      gender_id: 1,
      inches: 0,
      feet: 0,
      weight: 0,
      image: null,
    };

    this.handleChange = this.handleChange.bind(this);

  }
  handleChange(event) {
    switch (event.target.name) {
      case "first_name":
        this.setState({ first_name: event.target.value });
        break;
      case "last_name":
        this.setState({ last_name: event.target.value });
        break;
      case "dob":
        this.setState({ dob: event.target.value });
        break;
      case "gender_id":
        this.setState({ gender_id: event.target.value });
        break;
      case "weight":
        this.setState({ weight: event.target.value });
        break;
      case "feet":
        this.setState({ feet: event.target.value });
        break;
      case "inches":
        this.setState({ inches: event.target.value });
        break;
      case "image":
        this.setState({ image: event.target.files[0] });
        break;
      default:
        break;
    }
  }



  render() {
    return (
      <>
        <form>
          <div>
            <label>Name</label>
            <input
              placeholder="First name"
              type="text"
              name="first_name"
              onChange={this.handleChange}
            />
          </div>

          {/* <label>Last Name</label> */}

          <input
            placeholder="Last name"
            type="text"
            name="last_name"
            onChange={this.handleChange}
          />

          <label>Gender</label>
          <select name="Gender_id" onChange={this.handleChange}>
            <option value={1}>Male</option>
            <option value={2}>Female</option>
            <option value={3}>Other</option>
          </select>
          <div>
            <label>Height</label>
            <div>
              {/* <label>Feet</label> */}
              <input
                placeholder="Feet"
                name="feet"
                min="0"
                max="9"
                type="number"
                onChange={this.handleChange}
              />
            </div>
            <div>
              {/* <label>Inches</label> */}
              <input
                placeholder="Inches"
                name="inches"
                min="0"
                max="11"
                type="number"
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div>
            <label>Weight</label>
            <input
              placeholder="lbs"
              name="weight"
              min="0"
              type="number"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>DoB</label>
            <input
              type="date"
              name="dob"
              id="dob"
              onChange={this.handleChange}
            />
          </div>

          <input type="file" name="image" onChange={this.handleChange} />
        </form>

        <AddressAutocomplete person={this.state} />
      </>
    );
  }
}

export default NewPerson;
