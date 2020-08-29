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
      <h3>nave.rs</h3>
      <button>Adicionar Naver</button>

      <section>
        {users.map(
          ({
            id,
            name,
            job_role,
            admission_date,
            user_id,
            project,
            birthdate,
            url,
          }) => (
            <div key={id}>
              <img src={`logo192.png`} alt={id} />
              <p>{name}</p>
              <p>{job_role}</p>
              <button>Delete</button>
              <button>Update</button>
            </div>
          )
        )}
      </section>
    </div>
  );
}
