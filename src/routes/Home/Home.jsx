import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home({ token }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(
          "https://navedex-api.herokuapp.com/v1/navers",
          { headers: { Authorization: `Bearer ${token}` } }
        );

        setUsers(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    getUsers();
  }, [token]);

  return (
    <div>
      <h1>nave.rs</h1>
      <button>Sair</button>

      <section>
        {users.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </section>
    </div>
  );
}
