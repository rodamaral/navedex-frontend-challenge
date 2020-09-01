import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import React, { useContext, useState } from 'react'
import axios from '../../services/axios'
import AuthContext from '../../contexts/AuthContext'
import EditDialog from './EditDialog'

function EditUser({ user: userProps, id, setLoading, getUsers }) {
    const [open, setOpen] = useState(false)
    const [user, setUser] = useState(userProps)
    const { token } = useContext(AuthContext)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const onClose = () => {
        setOpen(false)
    }

    const onClick = async () => {
        setLoading(true)

        try {
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
