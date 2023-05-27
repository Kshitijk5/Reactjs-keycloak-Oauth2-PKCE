// import React, { useContext } from "react";
// import { Public } from "./layouts/PublicPage/Public";
// import { AuthProvider, AuthContext } from "react-oauth2-code-pkce";
// import authConfig from "./authConfig.ts";
// import { Redirect, Route, Switch } from "react-router-dom";

// import { Private } from "./layouts/ProtectedPage/Private";
// import { Login } from "./layouts/LoginPage/Login";

// const App = () => {
//   const { token, tokenData, login } = useContext(AuthContext);
//   const isAuthenticated = !!token;
//   const roles = tokenData?.realm_access?.roles || [];
//   return (
//     <AuthProvider authConfig={authConfig}>
//       <Switch>
//         <Route exact path="/">
//           <Redirect to={<Public></Public>}></Redirect>
//         </Route>
//         <Route path={"/public"}>
//           <Public></Public>
//         </Route>
//         <Route path="/private">
//           <Private />
//         </Route>
//         <Route path="/login">
//           <Login />
//         </Route>
//       </Switch>
//     </AuthProvider>
//   );
// };

// export default App;
