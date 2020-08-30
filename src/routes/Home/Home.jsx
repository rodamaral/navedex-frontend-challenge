import React, { useState, useEffect, useContext } from "react";
import axios from "../../services/axios";
import Header from "../../components/Header";
import UsersList from "../../components/UsersList";
import AuthContext from "../../contexts/AuthContext";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useContext(AuthContext);

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
      <Header />

      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <h3>nave.rs</h3>
          <button>Adicionar Naver</button>
        </div>

        <div>{loading ? <div>loading</div> : <UsersList users={users} />}</div>
      </section>
    </div>
  );
}
