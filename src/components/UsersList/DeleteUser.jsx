import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import React, { useContext, useState } from 'react'
import AuthContext from '../../contexts/AuthContext'
import axios from '../../services/axios'
import DeleteDialog from './DeleteDialog'

export default function DeleteUser({ id, setLoading, getUsers }) {
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
            await axios.delete(`navers/${id}`, {
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
                <DeleteIcon />
            </IconButton>

            <DeleteDialog open={open} onClose={handleClose} onDelete={onClick} />
        </>
    )
}
