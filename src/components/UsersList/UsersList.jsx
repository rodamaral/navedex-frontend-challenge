import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

export default function Home({ users }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
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

            <span>{job_role}</span>

            <span>
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>

              <IconButton aria-label="delete">
                <EditIcon />
              </IconButton>
            </span>
          </div>
        )
      )}
    </div>
  );
}
