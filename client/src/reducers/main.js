const INITIAL_STATE = {
  isAuth: false,
  token: null
}

const mainReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOG_IN_USER":
      return { ...state, userId: action.payload, isAuth: true};
    case "LOG_OUT_USER":
      return { ...state, isAuth: false };
    default:
      return state;
  }
};

export default mainReducer;
