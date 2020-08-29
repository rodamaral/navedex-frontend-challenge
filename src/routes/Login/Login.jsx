import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    alert(`${email}: ${password}`);
  };

  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <fieldset>
          <h1>Nave.rs</h1>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="email">Email</label>

          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label htmlFor="password">Senha</label>

          <button>ENTRAR</button>
        </fieldset>
      </form>
    </div>
  );
}
