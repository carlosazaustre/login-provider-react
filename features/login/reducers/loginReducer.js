export const loginReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
        message: null,
      };
    case "LOGIN_SUCCESS":
      return { ...state, loading: false, message: action.message };
    case "LOGIN_FAILURE":
      return { ...state, loading: false, error: action.error };
    default:
      throw new Error();
  }
};
