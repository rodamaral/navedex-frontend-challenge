import React, { useContext, useState } from 'react'
import NaverForm from '../../components/NaverForm'
import AuthContext from '../../contexts/AuthContext'
import axios from '../../services/axios'

export default function EditUser({ setLoading = () => {}, getUsers = () => {} }) {
    const [user, setUser] = useState({
        job_role: '',
        admission_date: '',
        birthdate: '',
        name: '',
        project: '',
        url: '',
    })
    const { token } = useContext(AuthContext)

    const onClick = async () => {
        setLoading(true)

        try {
            await axios.post(
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
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
            getUsers()
        }
    }

    return (
        <>
            CRIAR:
            <NaverForm user={user} setUser={setUser} onSave={onClick} />
        </>
    )
}
