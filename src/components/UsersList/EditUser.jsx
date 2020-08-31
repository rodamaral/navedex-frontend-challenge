import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import React, { useContext, useState } from 'react'
import axios from '../../services/axios'
import AuthContext from '../../contexts/AuthContext'
import EditDialog from './EditDialog'

export default function EditUser({ user: userProps, id, setLoading, getUsers }) {
    const [open, setOpen] = useState(false)
    const [user, setUser] = useState(userProps)
    // const [name, setName] = useState(user.name)
    // const [job_role, setjob_role] = useState(user.job_role)
    // const [birthdate, setBirthdate] = useState(user.birthdate)
    // const [admission_date, setadmission_date] = useState(user.admission_date)
    // const [project, setProject] = useState(user.project)
    // const [url, setUrl] = useState(user.url)
    const { token } = useContext(AuthContext)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const onClose = () => {
        console.log('onClose :>> ', onClose)
        setOpen(false)
    }

    const onClick = async () => {
        setLoading(true)

        try {
            console.log({ id, token })
            await axios.put(
                `navers/${id}`,
                {
                    job_role: user.job_role,
                    admission_date: user.admission_date,
                    birthdate: user.birthdate,
                    name: user.name,
                    project: user.project,
                    url: user.url,
                },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            )
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
            setOpen(false)
            getUsers()
        }
    }

    return (
        <>
            <IconButton aria-label="delete" onClick={handleClickOpen}>
                <EditIcon />
            </IconButton>

            <EditDialog
                user={user}
                setUser={setUser}
                open={open}
                onClose={onClose}
                onSave={onClick}
            />
        </>
    )
}
