import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadPersonPage } from "../../actions";
import DeragatoryMarkForm from "../DeragatoryMark/DeragatoryMarkForm";
import DeragatoryMarks from "../DeragatoryMark";
import Persons from "./Persons/Persons";
import Addresses from "../Addresses";
// import Styles from "./IndividualPerson.module.scss";

const PersonsPage = ({ ...props }) => {
  const user = useSelector((state) => state.user);
  const persons = useSelector((state) => state.persons.individualPerson);
  const dispatch = useDispatch();
  const id = parseInt(props.match.params.id);
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    dispatch(loadPersonPage(id));
  }, []);

  return (
    <>
      {persons && (
        <div>
          <Persons person={persons} />

          <p>Addresses:</p>
          {persons.addresses.map((address) => {
            return <Addresses key={address.id} address={address} />;
          })}
          <div>
            <h4>Associates</h4>
            {persons.associates.map((associate) => {
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

            {persons.marks.map((mark) => {
              return (
                <div key={mark.id}>
                  <h3>{mark.createdBy.company_name}</h3>
                  <DeragatoryMarks mark={mark} />
                </div>
              );
            })}

            {persons.marks.some((mark) => mark.user_id === user.id) ? null : (
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
                on_person={persons.id}
              />
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};

export default PersonsPage;
