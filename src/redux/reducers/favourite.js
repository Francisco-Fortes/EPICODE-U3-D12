import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from "../actions";

const initialState = {
  list: [],
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE: //Now it is a CONST imported from actions
      // case 'ADD_TO_FAVOURITE':
      return {
        ...state,
        // favourite: {
        //   ...state.favourite,
        //...state.favourite.list
        //are not needed anymore because of the bigReducer and the slice we are in
        list: [...state.list, action.payload],
      };
    case REMOVE_FROM_FAVOURITE:
      // case 'REMOVE_FROM_FAVOURITE':
      return {
        ...state,
        // favourite: {
        //   ...state.favourite,
        // state.favourite.list
        list: state.list.filter((fav) => fav !== action.payload),
      };
    default:
      return state;
  }
};

export default favouriteReducer;
