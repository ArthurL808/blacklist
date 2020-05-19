import React, { useState } from "react";
import {connect} from 'react-redux'
import Styles from "./Searchbar.module.scss";
import { searchPersonsAsync } from "../../actions";

const Searchbar = ({ ...props }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errMsg, setErrMsg] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    if(searchTerm === ""){
        return setErrMsg('Please enter a name into searchbar')
    }
    console.log(props)
    props.searchPersons(searchTerm)
    setErrMsg('')
  };

  return (
    <div className={Styles.search}>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
        <input type="submit" value="submit" />
      </form>
      {errMsg ? <p>{errMsg}</p>: null}
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
