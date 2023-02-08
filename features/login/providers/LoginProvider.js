import { useReducer, createContext } from "react";
import { loginReducer } from "../reducers/loginReducer";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [state, dispatch] = useReducer(loginReducer, {
    loading: false,
    error: null,
    message: null,
  });

  const login = async (username, password) => {
    dispatch({ type: "LOGIN_REQUEST" });

    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      dispatch({ type: "LOGIN_SUCCESS", message: "Login successful" });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", error: error.message });
    }
  };

  return (
    <LoginContext.Provider
      value={{
        ...state,
        login,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
