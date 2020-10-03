const mainReducer = (state = {
    isAuth: false,
  }, action) => {
  switch (action.type) {
    case "LOG_IN_USER":
      return { ...state, isLoggedIn: true, userId: action.userId };
    case "LOG_OUT_USER":
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

export default mainReducer;
