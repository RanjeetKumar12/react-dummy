const AuthReducer = (state, action) => {
    switch (action.type) {
      case "INITIAL_CHECK":
        return {
          ...state,
          token: action.payload.token,
          user: action.payload.user,
        };
      case "LOGIN":
        return {
          ...state,
          token: action.payload.token,
          user: action.payload.user,
        };
      case "SIGNUP":
        return {
          ...state,
          token: action.payload.token,
          user: action.payload.user,
        };
      case "LOGOUT":
        return { ...state, token: null, user: null };
      default:
        return state;
    }
  };
  
  export { AuthReducer };