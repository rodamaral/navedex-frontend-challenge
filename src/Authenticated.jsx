import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";

const Authenticated = ({ token }) => (
  <BrowserRouter>
    <Switch>
      <Route path="/home">
        <Home token={token} />
      </Route>
      <Redirect to="/home" />
    </Switch>
  </BrowserRouter>
);

export default Authenticated;
