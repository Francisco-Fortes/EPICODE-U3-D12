export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_BOOKS = "GET_BOOKS";

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

export const addToFavouriteAction = (payloadData) => {
  return {
    type: "ADD_TO_FAVOURITE",
    payload: payloadData,
  };
};

export const removeFromFavouriteAction = (payloadData) => {
  return {
    type: "REMOVE_FROM_FAVOURITE",
    payload: payloadData,
  };
};

// It needs query because it comes from MainSearch
export const getBooksAction = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        console.log(data);
        dispatch({
          type: GET_BOOKS,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
