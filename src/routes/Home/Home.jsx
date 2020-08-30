import React, { useState, useEffect } from "react";
import axios from "../../services/axios";
import UsersList from "../../components/UsersList";

export default function Home({ token }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        const res = await axios.get("navers", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
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
        {loading ? <div>loading</div> : <UsersList users={users} />}
      </section>
    </div>
  );
}
