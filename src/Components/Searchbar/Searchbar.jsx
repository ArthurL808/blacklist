import React, { useState } from "react";
import {connect} from 'react-redux'
import Styles from "./Searchbar.module.scss";
import { searchPersonsAsync } from "../../actions";

const Searchbar = ({ ...props }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.searchPersons(searchTerm)
  };

  return (
    <div className={Styles.search}>
  {/* Make search a debounce function instead of submit */}
      <form onSubmit={handleSubmit}>
        <label>
          First or Last Name:
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            required
          />
        </label>
        <input type="submit" value="submit" />
      </form>
      {!props.error ? null : (
          <p className={Styles.error}>{props.error}</p>
        )}
    </div>
  );
};

const mapDispatchToProps=dispatch=>{
return{
    searchPersons: searchTerm => {
        dispatch(searchPersonsAsync(searchTerm))
    }
}
}

export default connect(null,mapDispatchToProps)(Searchbar);
