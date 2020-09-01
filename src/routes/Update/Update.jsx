import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import React, { useContext, useState } from 'react'
import NaverForm from '../../components/NaverForm'
import AuthContext from '../../contexts/AuthContext'
import axios from '../../services/axios'
import LinearProgress from '@material-ui/core/LinearProgress'
import { Redirect, useHistory } from 'react-router-dom'

export default function Update({ user, setUser }) {
    const [loading, setLoading] = useState(false)
    const [formUser, setFormUser] = useState(user)
    const { token } = useContext(AuthContext)
    const history = useHistory()

    const onClick = async (event) => {
        event.preventDefault()
        setLoading(true)

        try {
            await axios.put(
                `navers/${user.id}`,
                {
                    job_role: formUser.job_role,
                    admission_date: formUser.admission_date,
                    birthdate: formUser.birthdate,
                    name: formUser.name,
                    project: formUser.project,
                    url: formUser.url,
                },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            )
            setLoading(false)
            onReturn()
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
        </div>
    )
}
