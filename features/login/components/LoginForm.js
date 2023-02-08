import { useState, useContext } from "react";
import { LoginContext } from "../providers/LoginProvider";
import { Loader } from "./Loader";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error, login, message } = useContext(LoginContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    login(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div>{error}</div>}
      {message && <div>{message}</div>}
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Login</button>
      {loading && <Loader />}
    </form>
  );
};
