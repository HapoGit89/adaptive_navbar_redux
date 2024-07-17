const INITIAL_STATE = { page: "Home" };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "CHANGE":
      return { page: action.payload.page};

    default:
      return state;
  }
}

export default rootReducer;