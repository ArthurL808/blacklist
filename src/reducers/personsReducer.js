import {
  PERSON_SEARCH,
  PERSON_SEARCH_FAIL,
  LOAD_PERSON,
  LOAD_PERSON_MARKS,
} from "../actions/index";

const initialState = {
  personsSearch: {
    persons: [],
    error: "",
  },
  individualPerson: {
    id: 0,
    first_name: "",
    last_name: "",
    addresses: [],
    dob: "",
    gender_id: 0,
    mental_health_issues: false,
    drug_user: false,
    created_at: "",
    updated_at: "",
    associates: [],
    gender: {
      id: 0,
      gender: "",
      created_at: "",
      updated_at: "",
    },
    marks: [],
  },
};

const personsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PERSON:
      return {
        ...state,
        individualPerson: {
          ...action.payload.individualPerson,
          marks: [...action.payload.marks],
        },
      };
    case LOAD_PERSON_MARKS:
      return {
        ...state,
        individualPerson: {
          ...state.individualPerson,
          marks: action.payload,
        },
      };
    case PERSON_SEARCH:
      return {
        ...state,
        personsSearch: {
          persons: action.payload,
          error: "",
        },
      };
    case PERSON_SEARCH_FAIL:
      return {
        ...state,
        personsSearch: {
          persons: [],
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default personsReducer;
