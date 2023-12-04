const initialState = { items: null, last_modified: null };

const dataReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_DATA":
      return {
        items: payload,
        last_modified: new Date(),
      };

    default:
      return state;
  }
};

export default dataReducer;
