import React from "react";
import User from "./User";

export default function Home({ users, getUsers }) {
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
          <User
            key={id}
            id={id}
            name={name}
            jobRole={job_role}
            getUsers={getUsers}
          />
        )
      )}
    </div>
  );
}
