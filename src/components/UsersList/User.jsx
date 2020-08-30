import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import React, { useState } from "react";
import DeleteUser from "./DeleteUser";
import LinearProgress from "@material-ui/core/LinearProgress";

// FIXME: image
export default function User({ id, name, jobRole, getUsers }) {
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
      <div style={{ minWidth: 130, border: "1px solid red" }}>
        {loading && <LinearProgress />}
      </div>

      <img src={`logo192.png`} alt={id} />

      <strong>{name}</strong>

      <span>{jobRole}</span>

      <span>
        <DeleteUser id={id} setLoading={setLoading} getUsers={getUsers} />

        <IconButton aria-label="delete">
          <EditIcon />
        </IconButton>
      </span>
    </div>
  );
}
