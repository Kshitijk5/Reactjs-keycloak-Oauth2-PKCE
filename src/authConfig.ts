import { TAuthConfig, TRefreshTokenExpiredEvent } from "react-oauth2-code-pkce";

const authConfig: TAuthConfig = {
  clientId: "testappclient",
  authorizationEndpoint:
    "http://localhost:8081/realms/testapp/protocol/openid-connect/auth",
  logoutEndpoint:
    "http://localhost:8081/realms/testapp/protocol/openid-connect/logout",
  tokenEndpoint:
    "http://localhost:8081/realms/testapp/protocol/openid-connect/token",
  redirectUri: "http://localhost:3000/",
  logoutRedirect: "http://localhost:3000/logout",
  scope: "email openid address",
  decodeToken: true,
  autoLogin: false,
  clearURL: true,

  onRefreshTokenExpire: (event: TRefreshTokenExpiredEvent) =>
    window.confirm(
      "Session expired. Refresh page to continue using the site?"
    ) && event.login(),
};

export default authConfig;
