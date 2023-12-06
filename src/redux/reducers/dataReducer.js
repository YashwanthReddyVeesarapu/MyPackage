const initialState = { items: null, loading: false, error: null };

import * as actionTypes from "../actions/actionTypes";

const dataReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.FETCH_DATA:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case actionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        items: payload,
        loading: false,
      };
    case actionTypes.FETCH_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case actionTypes.CLEAR_DATA:
      return initialState;

    default:
      return state;
  }
};

export default dataReducer;
