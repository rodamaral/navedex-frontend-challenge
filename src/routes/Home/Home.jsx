import React, { useState, useEffect, useContext, useCallback } from "react";
import axios from "../../services/axios";
import Header from "../../components/Header";
import UsersList from "../../components/UsersList";
import AuthContext from "../../contexts/AuthContext";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useContext(AuthContext);

  const getUsers = useCallback(async () => {
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
  }, [token]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

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

        <div>
          {loading ? (
            <div>loading</div>
          ) : (
            <UsersList users={users} getUsers={getUsers} />
          )}
        </div>
      </section>
    </div>
  );
}
