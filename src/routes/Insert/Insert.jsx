import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import React, { useContext, useState } from 'react'
import NaverForm from '../../components/NaverForm'
import AuthContext from '../../contexts/AuthContext'
import axios from '../../services/axios'
import LinearProgress from '@material-ui/core/LinearProgress'

export default function Insert() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [user, setUser] = useState({
        job_role: '',
        admission_date: '',
        birthdate: '',
        name: '',
        project: '',
        url: '',
    })
    const { token } = useContext(AuthContext)

    const onClick = async (event) => {
        event.preventDefault()
        setLoading(true)

        try {
            const res = await axios.post(
                `navers`,
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
            setError(null)
        } catch (err) {
            console.error(err)
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            {loading && <LinearProgress />}

            <h2>
                <ArrowBackIosIcon /> Adicionar Naver
            </h2>

            <NaverForm user={user} disabled={loading} setUser={setUser} onSave={onClick} />
        </div>
    )
}
