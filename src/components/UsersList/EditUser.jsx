import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import React, { useContext, useState } from 'react'
import axios from '../../services/axios'
import AuthContext from '../../contexts/AuthContext'
import EditDialog from './EditDialog'

export default function EditUser({ user, id, setLoading, getUsers }) {
    const [open, setOpen] = useState(false)
    const { token } = useContext(AuthContext)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const onClick = async () => {
        setLoading(true)

        try {
            await axios.put(`navers/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            })
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

            <EditDialog user={user} open={open} onClose={handleClose} onDelete={onClick} />
        </>
    )
}
