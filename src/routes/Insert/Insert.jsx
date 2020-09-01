import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import React, { useContext, useState } from 'react'
import NaverForm from '../../components/NaverForm'
import AuthContext from '../../contexts/AuthContext'
import axios from '../../services/axios'
import LinearProgress from '@material-ui/core/LinearProgress'
import { useHistory } from 'react-router-dom'
import NaverConfirmation from '../../components/NaverConfirmation'

export default function Insert() {
    const [confirmationOpen, setConfirmationOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({
        job_role: '',
        admission_date: '',
        birthdate: '',
        name: '',
        project: '',
        url: '',
    })
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
            await axios.post(
                `navers`,
                {
                    job_role: user.job_role,
                    admission_date: user.admission_date.replaceAll('-', '/'),
                    birthdate: user.birthdate.replaceAll('-', '/'),
                    name: user.name,
                    project: user.project,
                    url: user.url,
                },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            )
            setConfirmationOpen(true)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    const onReturn = () => {
        setUser(null)
        history.push('/home')
    }

    return (
        <div>
            {loading && <LinearProgress />}

            <h2>
                <ArrowBackIosIcon onClick={onReturn} /> Adicionar Naver
            </h2>

            <NaverForm user={user} disabled={loading} setUser={setUser} onSave={onClick} />

            <NaverConfirmation
                open={confirmationOpen}
                onClose={onCloseConfirmation}
                title="Naver criado"
                text="Naver criado com sucesso!"
            />
        </div>
    )
}
