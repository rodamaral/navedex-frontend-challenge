import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "./routes/Login";

const Unauthenticated = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Redirect to="/login" />
    </Switch>
  </BrowserRouter>
);

export default Unauthenticated;
