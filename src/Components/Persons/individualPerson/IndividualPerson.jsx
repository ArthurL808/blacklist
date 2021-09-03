import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
// import Styles from "./IndividualPerson.module.scss";
import DeragatoryMarkForm from "../../DeragatoryMark/DeragatoryMarkForm";
import DeragatoryMarks from "../../DeragatoryMark";
import moment from "moment";

const IndividualPerson = ({ ...props }) => {
  const user = useSelector((state) => state.user);
  const id = parseInt(props.match.params.id);
  const [openForm, setOpenForm] = useState(false);
  const [personMarks, setPersonMarks] = useState([]);
  const [person, setPerson] = useState({
    id: null,
    first_name: "",
    last_name: "",
    addresses: [],
    dob: "",
    gender_id: 0,
    created_at: "",
    updated_at: "",
    associates: [],
    gender: {
      id: 0,
      gender: "",
      created_at: "",
      updated_at: "",
    },
  });

  useEffect(() => {
    const personRequest = axios.get(`/api/persons/${id}`);
    const personMarksRequest = axios.get(`/api/deragatoryMarks/onPerson/${id}`);
    axios
      .all([personRequest, personMarksRequest])
      .then(
        axios.spread((...response) => {
          setPerson(response[0].data);
          setPersonMarks(response[1].data);
        })
      )
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      {person && (
        <div>
          <img src={person.image_url} alt="client" />
          <h3>
            {person.last_name}, {person.first_name}
          </h3>
          <p>Addresses:</p>
          {person.addresses.map((address) => {
            return (
              <div key={address.id}>
                {address.street_address}, {address.zipcode} Apt#:{" "}
                {address.apt_number}
              </div>
            );
          })}
          <p>Gender: {person.gender.gender}</p>
          <p>
            DoB: {moment(person.dob).format("MMM DD, YYYY")} Age:{" "}
            {moment(person.dob).toNow(true)}
          </p>
          <div>
            <h4>Associates</h4>
            {person.associates.map((associate) => {
              return (
                <div key={associate.id}>
                  <p>
                    {associate.last_name}, {associate.first_name}
                  </p>
                  <p>Nickname: {associate.nickname}</p>
                  <p>{associate.relationship}</p>
                </div>
              );
            })}
          </div>
          <div>
            <h4>Blacklist Offenses</h4>

            {personMarks.map((mark) => {
              return (
                <div key={mark.id}>
                  <h3>{mark.createdBy.company_name}</h3>
                  <DeragatoryMarks mark={mark} />
                </div>
              );
            })}

            {personMarks.some((mark) => mark.user_id === user.id) ? null : (
              <button
                onClick={() => {
                  setOpenForm(!openForm);
                }}
              >
                {openForm ? "Close" : "Add Mark"}
              </button>
            )}

            {openForm ? (
              <DeragatoryMarkForm
                openForm={openForm}
                setOpenForm={setOpenForm}
                on_person={person.id}
              />
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};

export default IndividualPerson;
