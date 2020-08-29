import React, { Suspense } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Login from "./routes/Login";

const App = () => (
  <Suspense fallback={<span>Carregando...</span>}>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  </Suspense>
);

export default App;
