import DialogTitle from '@material-ui/core/DialogTitle'
import PropTypes from 'prop-types'
import React from 'react'
import Modal from 'react-modal'
import '../../hooks/useInitialValue'
import NaverForm from '../NaverForm'

export default function Edit({ user, setUser, onClose, open, loading, onSave }) {
    const onChange = (event) => {
        const { name, value } = event.target
        setUser((user) => ({ ...user, [name]: value }))
    }

    return (
        <Modal
            isOpen={open}
            contentLabel="Minimal Modal Example"
            appElement={document.getElementById('root')}
            onRequestClose={onClose}
        >
            <DialogTitle id="simple-dialog-title">Editar Naver</DialogTitle>

            <NaverForm user={user} disabled={loading} setUser={setUser} onSave={onSave} />
        </Modal>
    )
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
}
