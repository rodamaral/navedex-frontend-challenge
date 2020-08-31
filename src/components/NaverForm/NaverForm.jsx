import { Box, Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'
import React from 'react'
import '../../hooks/useInitialValue'

export default function NaverForm({ user, setUser, onSave }) {
    const onChange = (event) => {
        const { name, value } = event.target
        setUser((user) => ({ ...user, [name]: value }))
    }

    return (
        <form>
            <Box>
                <TextField
                    label="Nome"
                    type="text"
                    value={user.name}
                    name="name"
                    onChange={onChange}
                />

                <TextField
                    label="Cargo"
                    type="text"
                    value={user.job_role}
                    name="job_role"
                    onChange={onChange}
                />

                <TextField
                    label="Idade"
                    type="text"
                    value={user.birthdate}
                    name="birthdate"
                    onChange={onChange}
                />

                <TextField
                    label="Tempo de empresa"
                    type="text"
                    value={user.admission_date}
                    name="admission_date"
                    onChange={onChange}
                />

                <TextField
                    label="Projetos que participou"
                    type="text"
                    value={user.project}
                    name="project"
                    onChange={onChange}
                />

                <TextField
                    label="URL da foto do Naver"
                    type="url"
                    value={user.url}
                    name="url"
                    onChange={onChange}
                />
            </Box>

            <Box>
                <Button onClick={onSave}>Salvar</Button>
            </Box>
        </form>
    )
}

NaverForm.propTypes = {
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
    setUser: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
}
