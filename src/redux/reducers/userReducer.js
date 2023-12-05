const initialState = {
  uid: null,
  email: null,
  displayName: null,
  token: null,
  last_modified: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "FETCH_USER_DATA":
      return payload;

    default:
      return state;
  }
};

export default userReducer;
