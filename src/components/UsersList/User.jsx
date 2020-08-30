import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import React from "react";
import DeleteUser from "./DeleteUser";

// FIXME: image
export default function User({ id, name, jobRole }) {
  return (
    <div
      key={id}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
      }}
    >
      <img src={`logo192.png`} alt={id} />

      <strong>{name}</strong>

      <span>{jobRole}</span>

      <span>
        <DeleteUser id={id} />

        <IconButton aria-label="delete">
          <EditIcon />
        </IconButton>
      </span>
    </div>
  );
}
