import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import React, { useContext, useState } from 'react'
import AuthContext from '../../contexts/AuthContext'
import axios from '../../services/axios'
import DeleteDialog from './DeleteDialog'

export default function DeleteUser({ id, setLoading, getUsers, setUser }) {
    const [open, setOpen] = useState(false)
    const [confirmationOpen, setConfirmationOpen] = useState(false)
    const { token } = useContext(AuthContext)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const onClose = () => {
        setOpen(false)
    }

    const onCloseConfirmation = () => {
        setConfirmationOpen(false)
        setOpen(false)
        setConfirmationOpen(true)
        setUser(null)
        getUsers()
    }

    const onClick = async () => {
        setLoading(true)

        try {
            await axios.delete(`navers/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            setLoading(false)
            setConfirmationOpen(true)
        } catch (error) {
            setLoading(false)
            console.error(error)
        }
    }

    return (
        <>
            <IconButton aria-label="delete" onClick={handleClickOpen}>
                <DeleteIcon />
            </IconButton>

            <DeleteDialog
                open={open}
                onClose={onClose}
                onDelete={onClick}
                confirmationOpen={confirmationOpen}
                onCloseConfirmation={onCloseConfirmation}
            />
        </>
    )
}
