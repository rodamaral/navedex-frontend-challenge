import React, { Suspense, useState } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Authenticated from "./Authenticated";
import Unuthenticated from "./Unauthenticated";

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <Suspense fallback={<span>Carregando...</span>}>
      <BrowserRouter>
        <Switch>
          {token == null ? (
            <Unuthenticated setToken={setToken} />
          ) : (
            <Authenticated token={token} />
          )}
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
