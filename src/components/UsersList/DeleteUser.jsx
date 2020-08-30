import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useContext } from "react";
import axios from "../../services/axios";
import AuthContext from "../../contexts/AuthContext";

export default function DeleteUser({ id, setLoading }) {
  const { token } = useContext(AuthContext);

  const onClick = () => {
    try {
      setLoading(true);
      axios.delete(`navers/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <IconButton aria-label="delete" onClick={onClick}>
      <DeleteIcon />
    </IconButton>
  );
}
