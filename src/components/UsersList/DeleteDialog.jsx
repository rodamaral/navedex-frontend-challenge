import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import PropTypes from 'prop-types'
import React from 'react'
import { Button, Box } from '@material-ui/core'

export default function DeleteDialog({ onClose, open, onDelete }) {
    return (
        <Dialog aria-labelledby="excluir-naver-dialog" open={open}>
            <DialogTitle id="simple-dialog-title">Excluir Naver</DialogTitle>
            Tem certeza de que deseja excluir este Naver?
            <Box>
                <Button onClick={onClose}>Cancelar</Button>

                <Button onClick={onDelete}>Excluir</Button>
            </Box>
        </Dialog>
    )
}

DeleteDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
}
