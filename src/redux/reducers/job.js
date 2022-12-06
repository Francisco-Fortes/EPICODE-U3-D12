import { GET_BOOKS } from "../actions";

const initialState = {
  result: [],
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        result: action.payload,
      };
    default:
      return state;
  }
};

export default jobReducer;
