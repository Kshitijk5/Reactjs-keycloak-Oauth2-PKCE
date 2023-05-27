import React from "react";
import { useContext } from "react";
import { AuthContext, IAuthContext } from "react-oauth2-code-pkce";

export const UserInfo = () => {
  const { token, tokenData, login, logOut, idTokenData } =
    useContext<IAuthContext>(AuthContext);
  if (token) {
    return (
      <>
        <div>Data</div>
        {token} <br />
        Roles:- {tokenData?.realm_access?.roles}
        <br />
        Email:- {tokenData?.email}
        <br />
        <h2>Id Token Data-------</h2>
        <pre>{JSON.stringify(idTokenData, null, 2)}</pre>
        <button
          onClick={() => {
            logOut();
          }}
        >
          Logout
        </button>
      </>
    );
  } else {
    return <button onClick={() => login()}>Login</button>;
  }
};
