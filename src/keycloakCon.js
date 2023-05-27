import Keycloak from "keycloak-js";
const keycloakConfig = {
  url: "http://localhost:8081/",
  realm: "testapp",
  clientId: "testappclient",
  client_secret: "0lJDdsZx4DtugfwircThjzU9ew9CpNOh",
};
const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
