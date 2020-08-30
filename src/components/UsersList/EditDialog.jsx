import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Button, Box } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import "../../hooks/useInitialValue";
import useInitialValue from "../../hooks/useInitialValue";

// nome, cargo, idade, tempo de empresa, projetos que participou, URL foto avatar
export default function Edit({ user, onClose, open, onSave }) {
  //   const [name, setName] = useState("");
  //   const [jobRole, setJobRole] = useState("");
  //   const [birthdate, setBirthdate] = useState("");
  //   const [admissionDate, setAdmissionDate] = useState("");
  //   const [project, setProject] = useState("");
  //   const [url, setUrl] = useState("");

  const [name, setName] = useInitialValue(user.name);
  const [jobRole, setJobRole] = useInitialValue(user.jobRole);
  const [birthdate, setBirthdate] = useInitialValue(user.birthdate);
  const [admissionDate, setAdmissionDate] = useInitialValue(
    user.admission_date
  );
  const [project, setProject] = useInitialValue(user.project);
  const [url, setUrl] = useInitialValue(user.url);

  return (
    <Dialog aria-labelledby="excluir-naver-dialog" open={open}>
      <DialogTitle id="simple-dialog-title">Editar Naver</DialogTitle>

      <form>
        <Box>
          <TextField
            label="Nome"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            label="Cargo"
            type="text"
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
          />

          <TextField
            label="Idade"
            type="text"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />

          <TextField
            label="Tempo de empresa"
            type="text"
            value={admissionDate}
            onChange={(e) => setAdmissionDate(e.target.value)}
          />

          <TextField
            label="Projetos que participou"
            type="text"
            value={project}
            onChange={(e) => setProject(e.target.value)}
          />

          <TextField
            label="URL da foto do Naver"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </Box>

        <Box>
          <Button onClick={onSave}>Salvar</Button>
        </Box>
      </form>
    </Dialog>
  );
}

Edit.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    job_role: PropTypes.string,
    admission_date: PropTypes.string,
    user_id: PropTypes.string,
    project: PropTypes.string,
    birthdate: PropTypes.string,
    url: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
};
