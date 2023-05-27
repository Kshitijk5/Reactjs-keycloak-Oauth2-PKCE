import React, { useContext } from "react";
import { AuthContext } from "react-oauth2-code-pkce";

export const Login = () => {
  const { login } = useContext(AuthContext);
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center">
        <button className="btn btn-primary" onClick={() => login()}>
          Login/Register
        </button>
      </div>
    </div>
  );
};
