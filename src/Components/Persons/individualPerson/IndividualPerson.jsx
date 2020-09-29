import React, { useEffect } from "react";
import Styles from "./IndividualPerson.module.scss";
import { connect } from "react-redux";
import { loadPersonAsync } from "../../../actions";
import moment from "moment";


const IndividualPerson = ({ ...props }) => {
  const { match, loadPerson, person } = props;
  const id = parseInt(match.params.id);

  useEffect(() => {
    loadPerson(id);
  }, [id, loadPerson]);
  return (
    <>
      {person && (
        <div>
          <img src={person.image_url} alt="client"/>
          <h3>
            {person.last_name}, {person.first_name}
          </h3>
          <p>Addresses:</p>
          {person.addresses.map((address)=>{
            return (
              <div key={address.id}>
                {address.street_address}, {address.zipcode} Apt#: {address.apt_number}
              </div>
            )
          })}
          <p>Gender: {person.gender.gender}</p>
          <p>
            DoB: {moment(person.dob).format('MMM DD, YYYY')} Age: {moment(person.dob).toNow(true)}
          </p>
          <div>
            <h4>Associates</h4>
            {person.associates.map((associate)=>{
              return(
                <div key={associate.id}>
                <p>{associate.last_name}, {associate.first_name}</p>
                <p>Nickname: {associate.nickname}</p>
                <p>{associate.relationship}</p>
                </div>
              )
            })}
          </div>
          <div>
            <h4>Blacklist Offenses</h4>
            {person.marks.map((mark) =>{
              return <div key= {mark.id}>
              <p>{mark.createdBy.company_name}</p>
              <p>{mark.reason.reason}</p>
              <p>{mark.personRole}</p>
              <p>{moment(mark.created_at).fromNow()} | {moment(mark.created_at).format('MMM Do, YYYY')}</p>
              </div>
            })}
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    person: state.persons.individualPerson,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadPerson: (id) => {
      dispatch(loadPersonAsync(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndividualPerson);
