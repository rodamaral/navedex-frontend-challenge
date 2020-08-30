import React from "react";
import Button from "@material-ui/core/Button";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "orange",
      }}
    >
      <h1>nave.rs</h1>

      <Button color="primary" size="small">
        Sair
      </Button>
    </header>
  );
}
