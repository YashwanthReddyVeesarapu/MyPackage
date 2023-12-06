const initialState = {
  uid: null,
  email: null,
  displayName: null,
  token: null,
  last_modified: null,
};

import * as actionTypes from "./../actions/actionTypes";

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.FETCH_USER_DATA:
      return { ...state, ...action.payload };

    case actionTypes.LOGOUT_USER:
      return initialState;

    default:
      return state;
  }
};

export default userReducer;
