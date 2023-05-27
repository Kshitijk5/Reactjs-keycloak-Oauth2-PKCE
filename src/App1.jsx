import React from "react";
import { AuthProvider } from "react-oauth2-code-pkce";
import authConfig from "./authConfig.ts";
import { UserInfo } from "./UserInfo.tsx";
import LoginInfo from "./LoginInfo.jsx";

export const App1 = () => {
  return (
    <AuthProvider authConfig={authConfig}>
      <LoginInfo></LoginInfo>
    </AuthProvider>
  );
};
