import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import React, { useContext, useState } from 'react'
import NaverForm from '../../components/NaverForm'
import AuthContext from '../../contexts/AuthContext'
import axios from '../../services/axios'
import LinearProgress from '@material-ui/core/LinearProgress'
import { Redirect, useHistory } from 'react-router-dom'
import NaverConfirmation from '../../components/NaverConfirmation'

export default function Update({ user, setUser }) {
    const [confirmationOpen, setConfirmationOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [formUser, setFormUser] = useState(user)
    const { token } = useContext(AuthContext)
    const history = useHistory()

    const onCloseConfirmation = () => {
        setConfirmationOpen(false)
        onReturn()
    }

    const onClick = async (event) => {
        event.preventDefault()
        setLoading(true)

        try {
            await axios.put(
                `navers/${user.id}`,
                {
                    job_role: formUser.job_role,
                    admission_date: formUser.admission_date.replaceAll('-', '/'),
                    birthdate: formUser.birthdate.replaceAll('-', '/'),
                    name: formUser.name,
                    project: formUser.project,
                    url: formUser.url,
                },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            )
            setLoading(false)
            setConfirmationOpen(true)
        } catch (error) {
            setLoading(false)
            console.error(error)
        }
    }

    const onReturn = () => {
        setUser(null)
        history.push('/home')
    }

    if (formUser == null) {
        return <Redirect to="home" />
    }

    return (
        <div>
            {loading && <LinearProgress />}

            <h2>
                <ArrowBackIosIcon onClick={onReturn} /> Editar Naver
            </h2>

            <NaverForm user={formUser} disabled={loading} setUser={setFormUser} onSave={onClick} />

            <NaverConfirmation
                open={confirmationOpen}
                onClose={onCloseConfirmation}
                title="Naver atualizado"
                text="Naver atualizado com sucesso!"
            />
        </div>
    )
}
