import React, { useState } from "react";
import axios from "axios";

export default function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://navedex-api.herokuapp.com/v1/users/login", {
        password,
        email,
      })
      .then((res) => {
        setToken(res.data.token);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <fieldset>
          <h1>Nave.rs</h1>

          <label>
            Email
            <input type="text" value={email} onChange={onChangeEmail} />
          </label>

          <label>
            Senha
            <input
              type="password"
              id="password"
              value={password}
              onChange={onChangePassword}
            />
          </label>

          <button>ENTRAR</button>
        </fieldset>
      </form>
    </div>
  );
}
