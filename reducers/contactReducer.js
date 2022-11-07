import {
  CREATE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
} from "../constant/types";

const intialState = {
  contacts: [],
  contact: null,
  selectedContacts: [],
};

export const contactReducer = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case GET_CONTACT:
      let arr = state.contacts.filter(
        (contact) => contact.id === action.payload
      );
      arr = arr.values();//to get object from array
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        contact: arr,//the contact was null so the value we got we stored it in contact
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    case DELETE_CONTACT:
      console.log("delete",state.contacts.filter(
        (contact)=> console.log("contact",contact)
      ));
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload 
        ),
      };
    default:
      return state;
  }
};
