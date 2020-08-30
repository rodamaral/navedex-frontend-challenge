import LinearProgress from "@material-ui/core/LinearProgress";
import React, { useState } from "react";
import DeleteUser from "./DeleteUser";
import EditUser from "./EditUser";

// FIXME: image
export default function User({ user, id, name, jobRole, getUsers }) {
  const [loading, setLoading] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        border: "1px solid blue",
      }}
    >
      <div style={{ minWidth: "100%" }}>{loading && <LinearProgress />}</div>

      <img src={`logo192.png`} alt={id} />

      <strong>{name}</strong>

      <span>{jobRole}</span>

      <span>
        <DeleteUser id={id} setLoading={setLoading} getUsers={getUsers} />

        <EditUser
          id={id}
          user={user}
          setLoading={setLoading}
          getUsers={getUsers}
        />
      </span>
    </div>
  );
}
