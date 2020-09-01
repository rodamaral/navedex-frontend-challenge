import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../../components/Button'
import UsersList from '../../components/UsersList'
import AuthContext from '../../contexts/AuthContext'
import axios from '../../services/axios'
import LinearProgress from '@material-ui/core/LinearProgress'

const Section = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    background: white;
    width: 100%;
    margin: 20px;
`

const transformData = (data) => ({
    ...data,
    birthdate: data.birthdate.substring(0, 10),
    admission_date: data.admission_date.substring(0, 10),
})

export default function Home({ user, setUser }) {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const { token } = useContext(AuthContext)
    const history = useHistory()

    const getUsers = useCallback(async () => {
        try {
            setLoading(true)
            const res = await axios.get('navers', {
                headers: { Authorization: `Bearer ${token}` },
            })

            setUsers(res.data.map(transformData))
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }, [token])

    useEffect(() => {
        getUsers()
    }, [getUsers])

    const onClick = () => {
        history.push('/insert')
    }

    return (
        <>
            <Section>
                <h4>Navers</h4>

                <Button onClick={onClick} primary>
                    Adicionar Naver
                </Button>
            </Section>

            <div>
                {loading ? (
                    <>
                        <LinearProgress />
                        <div>Carregando...</div>
                    </>
                ) : (
                    <UsersList user={user} setUser={setUser} users={users} getUsers={getUsers} />
                )}
            </div>
        </>
    )
}
